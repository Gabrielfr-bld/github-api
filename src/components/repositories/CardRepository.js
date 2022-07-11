import React from 'react';
import { WrapperCard, WrapperTitle } from './style';

function CardRepository({ name, linkRepo, fullName }) {
  return (
    <WrapperCard>
      <WrapperTitle>{name}</WrapperTitle>
      <h3>Full Name: </h3>
      <a href={linkRepo} target='_blank' rel='noreferrer'>{fullName}</a>
    </WrapperCard>
  );
}

export default CardRepository;