// make a call to GetUser
function getWordlist(client) {
  return new Promise((resolve, reject) => {
    client.getWordlist({}, (error, user) => {
      if (error) {
        reject(error);
      } else {
        resolve(user);
      }
    });
  });
}
function addNewWordlist(client, wordlist) {
  console.log(client);
  return new Promise((resolve, reject) => {
    client.addNewWordlist(wordlist, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response);
      }
    });
  });
}

module.exports = {
  getWordlist,
  addNewWordlist,
};
