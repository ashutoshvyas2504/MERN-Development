import React, { useEffect, useRef, useState } from "react";

const App = () => {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState([]);
  let timerId = useRef(null);
  function onInputChange(event){
    setQuery (event.target.value);
  }
  async function getData() {
    if (query.trim().length == 0) return;
    console.log("GetData called for query" , query);

    let apiData = await fetch(getApi(query));
    let data = await apiData.json();
    setProducts(data.products);
  }

  useEffect(
    function () {
      if (timerId.current) {
        clearTimeout(timerId.current);
      }
      timerId.current = setTimeout(getData, 300);

      // console.log(":Effect Called");
      // console.log("CallBack called for useEffect");
    },
    [query],
  );



  // console.log("App component");
  return (

    <div style={style?.root}>
      <p>Flipkart Search Bar</p>

      <input
        value={query}
        onChange={onInputChange}
        style={style?.input}
        type="text"

      />

      {products.map(function (pObj) {
        return (
          <div style={style?.suggestion}>
            <p> {pObj.title} </p>
          </div>
        );
      })}
    </div>
  );
};

export default App;

function getApi(product) {
  return `https://dummyjson.com/products/search?q=${product}`;
}

// useEffect is a hook to handle all the sideEffects for example
// ( Api call , setTimers or applying event directly to dom)
// useEffect will run after the return is done
// dependency array -- 1) [] -- it will run only one time on initial mount
// 2) [query] -- when the dependency will change the useEffect will run
// 3) empty -- (Donot pass the second parameter is useEffect ) - 
// it will always re-Run when the component re renders
const style = {

  root: {
    height: "100vh",
    width: "100vw",
    backgroundColor: "#FFF4DE",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  input: {
    height: "5%",
    width: "30%",
    margin: "5%",
    marginBottom: "1%",
    fontSize: "1.5rem",
    outline: "none",
    borderRadius: "10px",
    padding: "5px",
  },
  suggestion: {
    height: "5%",
    width: "25%",
    margin: "1%",
    backgroundColor: "#FFE8C4",
    fontSize: "1.5rem",
    outline: "none",
    borderRadius: "10px",
    padding: "5px",
  },


};