import { useState } from "react";
import { Renderer } from "@vivliostyle/react";
import "./assets/style/App.sass"

const App = () => {
  const [page, setPage] = useState(1);
  function next() {
    setPage((page) => page + 1);
  }
  function prev() {
    setPage((page) => page - 1);
  }
  function onLoad(state) {
    console.log(state.epageCount, state.docTitle);
  }
  
  const sample = "./containers/books/gon/新美南吉_ごん狐.html";
  
  return (
    <div>
      <Renderer source={sample} page={page} onLoad={onLoad} />
      <button onClick={next}>Next</button>
      <button onClick={prev}>Prev</button>
    </div>
  );
};

export default App;