import Wordlist from "./components/Wordlist";
import { UserServiceClient } from "./proto/ClientServiceClientPb.ts";

function App() {
  const client = new UserServiceClient("http://localhost:8080");
  // useEffect(() => {
  //   (async () => {
  //     const client = new UserServiceClient("http://localhost:8080");
  //     const woord = new word();
  //     const list = new wordlist();
  //     woord.setWord("maan");
  //     woord.setDescription("boven de aarde");

  //     list.setWordlistname("test1");
  //     list.setDescription("test");
  //     list.setWordsList([woord]);

  //     client.addNewWordlist(list, {}, (err, response) => {
  //       if (err) console.log(err.metadata);
  //       else console.log(response);
  //     });
  //   })();
  // }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Wordlist client={client} />
    </div>
  );
}

export default App;
