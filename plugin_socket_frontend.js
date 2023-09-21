import { reactive } from 'vue';
import * as io from 'socket.io-client';

/* const socket = io(process.env.VUE_APP_WEBSOCKET_URL); */
// export default socket;

export const state = reactive({
  connected: false,
  monitoringEvents: [],
  graphsEvents: [],
});

const URL = process.env.VUE_APP_WEBSOCKET_URL;

export const socket = io.io(URL, { autoConnect: false });

socket.on('connect', () => {
  state.connected = true;
});

socket.on('disconnect', () => {
  state.connected = false;
  state.monitoringEvents = [];
  state.graphsEvents = [];
});

socket.on('get_monitoring', (...args) => {
  state.monitoringEvents.push(args);
});
