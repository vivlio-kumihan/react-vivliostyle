import React from "react";
import { useState } from "react";
import { Renderer } from "@vivliostyle/react";
import Reader from "./components/Reader";
import "./styles/App.sass";

const App = () => {
  const [page, setPage] = useState(1);
  
  const sampleFromHTML = "https://vivliostyle.github.io/vivliostyle_doc/samples/gon/index.html";
  // const sampleFromLOCAL = "./data/新美南吉 ごん狐.html";

  const next = () => {
    setPage((page) => page + 1);
  };
  
  const prev = () => {
    setPage((page) => page - 1);
  };
    
  function onLoad(state) {
    console.log(state.epageCount, state.docTitle);
  }
  
  return (
    <Reader 
      Renderer={Renderer}
      page={page}
      sampleFromHTML={sampleFromHTML}
      // sampleFromLOCAL={sampleFromLOCAL}
      next={next}
      prev={prev}
      onLoad={onLoad}
    />
  );
};

export default App;