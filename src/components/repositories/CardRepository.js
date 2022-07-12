import React from 'react';
import { WrapperCard, WrapperTitle, WrapperFullName } from './style';

function CardRepository({ name, linkRepo, fullName }) {
  return (
    <WrapperCard>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>Full Name: </WrapperFullName>
      <a href={linkRepo} target='_blank' rel='noreferrer'>{fullName}</a>
    </WrapperCard>
  );
}

export default CardRepository;