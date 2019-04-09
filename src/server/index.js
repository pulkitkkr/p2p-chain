const express = require('express');
const crypto = require('crypto');
const Swarm = require('discovery-swarm');
const defaults = require('dat-swarm-defaults');
const os = require('os');
const bodyParser = require('body-parser');
const { connectToNetwork } = require('./configs/network');
const { broadcastToPeers } = require('./utils');
const io = require('socket.io')();
const port = 8000;

io.listen(port);

let tellClient = (data) =>{};
io.on('connection', (client) => {
  client.on('subscribeToPeer', () => {
    console.log('client is subscribed to Peer');
    tellClient = (data) => client.emit('peerData', data);
  })
});

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

const myId = crypto.randomBytes(32);
global.peers = {};

global.myPeerId = myId.toString('hex');

const swarmConfigs = defaults({
      // peer-id
      id: myId,
  });
  const sw = Swarm(swarmConfigs);




app.post('/api/broadCast', (req, res) => {
  broadcastToPeers(JSON.stringify(req.body.Data));
  res.send({status: "sent"})
});

app.get('/api/subscribeToPeers', (req, res) => {
  console.log(global.port);
  const onUserRequest = (data) => {
    tellClient(data);
    console.log(tellClient);
    console.log("\n\nUser Sent: ",data);
  };

  connectToNetwork({
    swarms: sw,
    handleRequestQuery: onUserRequest,
  });
  res.send({port: global.port, id: myId.toString('hex')});
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
