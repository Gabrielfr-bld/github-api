import React from 'react';
import { WrapperCard } from './style';

function CardRepository({ name, linkRepo, fullName }) {
  return (
    <WrapperCard>
      <h1>{name}</h1>
      <h3>Full Name: </h3>
      <a href={linkRepo} target='_blank' rel='noreferrer'>{fullName}</a>
    </WrapperCard>
  );
}

export default CardRepository;