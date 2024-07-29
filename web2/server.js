const os = require("os");
const express = require("express");
const app = express();
const redis = require("redis");
const redisClient = redis.createClient({
  host: "redis",
  port: 6379,
});

app.get("/web2", function (req, res) {
  redisClient.get("numVisits", function (err, numVisits) {
    console.log(numVisits);
    numVisitsToDisplay = parseInt(numVisits) + 1;
    if (isNaN(numVisitsToDisplay)) {
      numVisitsToDisplay = 1;
    }
    res.send(os.hostname() + ": Number of visits isovopweb2" + numVisits);
    numVisits++;
    redisClient.set("numVisits", numVisits);
  });
});

app.listen(5000, function () {
  console.log("Web application is listening on port 5000");
});
