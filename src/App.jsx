import React, { useState, useEffect } from "react";
//import "./styles.css";

function App() {
  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, nextitemsperpage] = useState(10);

  useEffect(() => {
    fetch('https://dummyjson.com/products/')
      .then(response => response.json())
      .then(json => {
        setState(json.products);
      });
  }, []);
  
 
 var firstindex = currentPage * itemsPerPage;
var lastindex = firstindex + 10
 function click(){
   setCurrentPage(currentPage+1)
 }

function click2(){
  setCurrentPage(currentPage-1)
}





  return (
    <div>
      <div>
      <ul>
        {state.slice(firstindex,lastindex).map((data) => (
          <li>
            {data.title}
            {/* Directly access the first image without conditional check */}
            <img src={data.images[0]} alt="product details" />
            <button>  add to cart </button>
          </li>
        ))}
      </ul>
      </div>
      <div>
      <h1>     {firstindex}    </h1>
        <button onClick={click2}>
          Previous
        </button>
        <button onClick={click}>
          Next
        </button>
      </div>
      <h1>karuunakar yadav</h1>
    </div>
  );
}

export default App;


