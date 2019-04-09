const express = require('express');
const crypto = require('crypto');
const Swarm = require('discovery-swarm');
const defaults = require('dat-swarm-defaults');
const os = require('os');
const bodyParser = require('body-parser');
const { connectToNetwork } = require('./configs/network');
const { broadcastToPeers } = require('./utils');


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

  const onUserRequest = (data) => {
      console.log("\n\nUser Sent: ",data);
  };

  connectToNetwork({
      swarms: sw,
      handleRequestQuery: onUserRequest,
  });


app.post('/api/setUserInfo', (req, res) => {
  console.log("API Request");
  broadcastToPeers(JSON.stringify(req.body.Data));
  res.send({status: "PK"})
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
