var unirest = require("unirest");

var req = unirest("GET", "https://deezerdevs-deezer.p.rapidapi.com/search");
var req = unirest(
  "GET",
  "https://deezerdevs-deezer.p.rapidapi.com/genre/%7Bid%7D"
);
var req = unirest(
  "GET",
  "https://deezerdevs-deezer.p.rapidapi.com/artist/%7Bid%7D"
);
var req = unirest(
  "GET",
  "https://deezerdevs-deezer.p.rapidapi.com/editorial/%7Bid%7D"
);
var req = unirest(
  "GET",
  "https://deezerdevs-deezer.p.rapidapi.com/playlist/%7Bid%7D"
);
var req = unirest(
  "GET",
  "https://deezerdevs-deezer.p.rapidapi.com/album/%7Bid%7D"
);

req.query({
  q: "eminem",
});

req.headers({
  "x-rapidapi-key": "c4c601bf11msh4c2c77a31e97b65p1c1a7bjsn748807a8804b",
  "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
  useQueryString: true,
});

req.end(function (res) {
  if (res.error) throw new Error(res.error);

  console.log(res.body);
});
