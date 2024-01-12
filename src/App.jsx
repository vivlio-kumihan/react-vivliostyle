import React from "react";
import { Renderer } from "@vivliostyle/react";
import './App.sass'

const App = () => {
  const [page, setPage] = React.useState(1);
  
  function next() {
    setPage((page) => page + 1);
  }
  
  function prev() {
    setPage((page) => page - 1);
  }
  
  function onLoad(state) {
    console.log(state.epageCount, state.docTitle);
  }
  
  const sample =
    "https://vivliostyle.github.io/vivliostyle_doc/samples/gon/index.html";
  
  return (
    <div className="wrapper">
      <Renderer source={sample} page={page} onLoad={onLoad} />
      <div className="btns">
        <button onClick={next}>Next</button>
        <button onClick={prev}>Prev</button>
      </div>
    </div>
  );
};

export default App;