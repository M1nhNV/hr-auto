// socket.js
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  transports: ['websocket'], // giảm delay, tránh fallback polling
});

export default socket;