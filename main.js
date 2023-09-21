
import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:8080"
  }
});

io.on("connection", (socket) => {
  console.log('connected', socket.id);

  socket.on("connect_error", () => {
    socket.connect();
  });

  socket.on("disconnect", () => {
    console.log('disconnected', socket.id);
  });

  socket.emit('set_monitoring', {
    "monitoring": [
      {
        "id": 33,
        "name": "MC-Celsia",
        "date": "2023-09-13T00:00:00",
        "hourly": {
          "type": "hourly",
          "init_date": "2023-03-14T18:00:00.000Z",
          "final_date": "2023-03-14T23:00:00.000Z",
          "section": "4",
          "percentage_error": "4.46838717203883",
          "energy": "177.421076851552",
          "energy_error": "-7.927860638527903",
          "market_id": "33",
          "id": 1546,
          "created_at": "2023-03-19T14:00:10.420Z",
          "updated_at": "2023-03-19T14:00:10.420Z"
        },
        "daily": {
          "max_demand": {
            "value": 500,
            "hour": "20:00"
          },
          "type": "daily",
          "init_date": "2023-03-14T00:00:00.000Z",
          "final_date": "2023-03-14T23:00:00.000Z",
          "trace_deviation": {
            "mayor": {
              "date": "2023-03-14T01:00:00",
              "value": "20.036767873748374"
            },
            "minor": {
              "date": "2023-03-14T12:00:00",
              "value": "1.386353202471575"
            }
          },
          "greather_five": "17",
          "market_id": "33",
          "id": 1547,
          "created_at": "2023-03-19T14:00:13.662Z",
          "updated_at": "2023-09-11T19:48:28.624Z"
        }
      },
    ]
  });

});



httpServer.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});