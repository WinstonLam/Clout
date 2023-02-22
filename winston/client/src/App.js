import { useEffect } from "react";
import Wordlist from "./components/Wordlist";
import { WordlistRequest } from "./proto/client_pb";
import { UserServiceClient } from "./proto/ClientServiceClientPb";

function App() {
  useEffect(() => {
    const fetchWordList = async () => {
      const client = new UserServiceClient("http://localhost:5000");
      const request = new WordlistRequest();
      request.setWordlistname("test");
      request.setWordsList(["maann", "roos", "vis"]);
      const response = await client
        .addNewWordlist(request, {})
        .catch(console.error);
      console.log(response);
    };
    fetchWordList();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Wordlist />
    </div>
  );
}

export default App;
