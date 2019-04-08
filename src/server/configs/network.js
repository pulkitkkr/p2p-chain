const getPort = require('get-port');
const { log } = require('../utils');

/*
    Swarms are Peers connected to network
    discovery-swarm library establishes a TCP p2p connection and uses
    discovery-channel library for peer discovery (i.e. finding de-centralized users in network)
*/


const connectToNetwork = async ({swarms,channelName="Identity-Chain-Channel",handleRequestQuery=() =>{}}) => {

  // Step 1: Choose a random unused port for listening TCP peer connections
  const port = await getPort();
  // Step 2: Let Swarm Server listen to you at the port we got above
   swarms.listen(port);
    log(`Listening to port: ${port}\n`);
    // Step 3: Create a channel Specific to our Block-Chain
    // The channel we are connecting to, Peers should discover other peers in this channel
    swarms.join(channelName);
    // Step 4: Add event listener, about what to do after when we connect to swarm connection
    swarms.on('connection', (conn, info) => {
        const connectedPeerId = info.id.toString('hex');
        // Step 6: Make sure we are constantly keeping the network alive and listening to peers
        if (info.initiator) {
            try {
                conn.setKeepAlive(true, 600)
            } catch (exception) {
                log('exception', exception)
            }
        }

        // Step 7: Listen if someone requests for information
        conn.on('data', (data) => {
            const parsedData = JSON.parse(data.toString());
            if(parsedData.sender !== myPeerId){
                handleRequestQuery(parsedData)
            }
        });

        // Step 8: Set Peer Details
        if (!peers[connectedPeerId]) {
            peers[connectedPeerId] = {}
        }
        peers[connectedPeerId].conn = conn
    });
};

module.exports = {
    connectToNetwork
};
