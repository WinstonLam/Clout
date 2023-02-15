'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

/*
Possible paths:
Get game: /game
Get game by id: /game/{game_id}
Put game by id: /game/{game_id}
Delete game by id: game/{game_id}
*/
function requireResource(resource)
{
  return require('./resources/'+resource);
}
const app = express();
app.get
app.get('*', (req, res) => {
  let strUrl = req._parsedUrl.path;
  let arrResource = strUrl.split('/');

  let resource = requireResource(arrResource[1]);
  let response = resource.get();
  res.send(response);
});
app.put('*', (req, res) => {
  res.send('Update item');
});
app.delete('*', (req, res) => {
  res.send('Delete item');
});
app.post('*', (req, res) => {
  res.send('Add item');
});
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
