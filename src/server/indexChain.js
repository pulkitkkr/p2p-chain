const crypto = require('crypto');
const Swarm = require('discovery-swarm');
const defaults = require('dat-swarm-defaults');
const { connectToNetwork } = require('./configs/network');
const { log, setReadLineInterface } = require('./utils');

const myId = crypto.randomBytes(32);
console.log('Your identity: ' + myId.toString('hex'));

global.readLineInterface = undefined;
global.peers = {};
global.myPeerId = myId.toString('hex');
let name;

setReadLineInterface();

(async ()=>{

    readLineInterface.question("Please Enter Your Name",(namex)=>{
        console.log("\nName: ",namex);
        readLineInterface.close()
    });
    readLineInterface.question("Pleaseddd Enter Your Name",(namex)=>{
        console.log("\nName: ",namex);
    });
    //
    // const swarmConfigs = defaults({
    //     // peer-id
    //     id: myId,
    // });
    // const sw = Swarm(swarmConfigs);
    //
    // const onUserRequest = (data) => {
    //     log("\n\nUser Sent: ",data);
    // };
    //
    // connectToNetwork({
    //     swarms: sw,
    //     handleRequestQuery: onUserRequest,
    // });
    //


})();

