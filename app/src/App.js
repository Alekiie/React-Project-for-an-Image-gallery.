import  React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Search from "./Components/Search";

const App = () => {
  const [word, setWord] = useState("");

  const handlerOnSearch = (e) => {
    e.preventDefault();
    console.log(word);
  };

  return (
    <div className="App">
      <Header />
      <Search handleSubmit={handlerOnSearch} word={word} setWord={setWord} />
    </div>
  );
};

export default App;
