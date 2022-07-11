import React from 'react';

function CardRepository({ name, linkRepo, fullName }) {
  return (
    <div>
      <h1>{name}</h1>
      <h3>Full Name: </h3>
      <a href={linkRepo} target='_blank' rel='noreferrer'>{fullName}</a>
    </div>
  );
}

export default CardRepository;