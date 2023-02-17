function get() {
  return { wordListName: "FirstList", words: ["maan", "roos", "vis"] };
}
function post(inputWordlist) {
  try {
    if (inputWordlist.request.words.length !== 0) {
      return {
        statusCode: 200,
        responseBody: "Saving wordlist to dataBase succesful",
      };
    }
  } catch (error) {
    throw new Error("error saving new wordlist", error);
  }
}
function getById() {
  return "get by id";
}
function deleteById() {
  return "delete";
}
module.exports = { get, post, getById, deleteById };
