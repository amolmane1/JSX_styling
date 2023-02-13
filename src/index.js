import React from "react";
import ReactDOM from "react-dom";

var img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <div>
      <img className="food-img" src={img + "?grayscale"} />
      <img className="food-img" src={img + "?grayscale"} />
      <img className="food-img" src={img + "?grayscale"} />
    </div>
  </div>,
  document.getElementById("root")
);
