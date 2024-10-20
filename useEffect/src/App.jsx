import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json.products);
        setLoading(false);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  if (loading) {
    return <h2>Please wait, data is loading...</h2>;
  }

  return (
    <div className="products-container">
      {data.map((product) => (
        <div key={product.id} className="card">
          <img
            src={product.images[0]}
            className="card-img-top"
            alt={product.title}
          />
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <a href="#" className="btn">
              ${product.price}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
