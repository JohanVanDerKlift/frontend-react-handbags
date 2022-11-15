import React from 'react';

function Article({redLabel, image, description, price}) {
  return (
    <article>
      <span>{redLabel}</span>
      <img src={image} alt=""/>
      <p>{description}</p>
      <h4>{price}</h4>
    </article>
  );
}

export default Article;