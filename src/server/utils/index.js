const readline = require('readline');

const broadcastToPeers = (data) => {
    for (let id in peers) {
        peers[id].conn.write(JSON.stringify(data));
    }
};
const setReadLineInterface = async (questionString) => {
    global.readLineInterface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    // let result= undefined;
    // readLineInterface.question(questionString,  answer => {
    //     result=answer;
    // });
};

// The Loq Function is alternative to console.log so that it remain in sync with readLineInterface
function log () {
    // let current = readLineInterface;
    // if (readLineInterface) {
    //     readLineInterface.clearLine();
    //     readLineInterface.close();
    //     global.readLineInterface = undefined;
    // }
    for (let i = 0, len = arguments.length; i < len; i++) {
        console.log(arguments[i])
    }
    // readLineInterface = current;
}

module.exports = {
    log,
    setReadLineInterface,
    broadcastToPeers
};
