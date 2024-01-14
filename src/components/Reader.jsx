const Reader = ({ Renderer, page, sampleFromHTML, next, prev, onLoad }) => {
// const Reader = ({ Renderer, page, sampleFromLOCAL, next, prev, onLoad }) => {
  return (
    <div className="wrapper">
      <Renderer source={sampleFromHTML} page={page} onLoad={onLoad} />
      <div className="btns">
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
      </div>
    </div>    
  );
};

export default Reader;


// import React, { useEffect, useState } from "react";

// const Reader = ({ Renderer, page, sampleFromLOCAL, next, prev, onLoad }) => {
//   const [fileContent, setFileContent] = useState(null);

//   useEffect(() => {
//     // ファイルの読み込み
//     const fetchData = async () => {
//       try {
//         const response = await fetch(sampleFromLOCAL);
//         const content = await response.text();
//         setFileContent(content);
//       } catch (error) {
//         console.error("Error fetching file:", error);
//       }
//     };

//     fetchData();
//   }, [sampleFromLOCAL]);

//   return (
//     <div className="wrapper">
//       {fileContent && (
//         <Renderer source={`data:text/html;charset=utf-8,${encodeURIComponent(fileContent)}`} page={page} onLoad={onLoad} />
//       )}
//       <div className="btns">
//         <button onClick={prev}>Prev</button>
//         <button onClick={next}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Reader;