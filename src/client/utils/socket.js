import openSocket from 'socket.io-client';
import { get, post } from './api'
const subscribeToPeers = (dataReducer) => {
  get('api/subscribeToPeers').then((resp)=> {
    const  socket = openSocket('http://localhost:8000');
    socket.on('peerData', data => dataReducer(data));
    socket.emit('subscribeToPeer', 1000);
  })
};

const broadCastData = (data) => {
  post('/api/broadCast',{ Data: data})
};

export {
  subscribeToPeers,
  broadCastData
}
