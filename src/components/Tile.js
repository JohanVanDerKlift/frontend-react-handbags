import React from "react";

function Tile({image, header, text}) {
  if (image) {
    return (
      <section>
        <img src={image} alt=""/>
      </section>
    );
  } else {
    return (
      <section>
        <h2>{header}</h2>
        <p>{text}</p>
      </section>
    );
  }

}

export default Tile;