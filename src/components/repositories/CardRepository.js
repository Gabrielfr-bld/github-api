import React from 'react';
import { WrapperCard, WrapperTitle, WrapperFullName, WrapperLink } from './style';

function CardRepository({ name, linkRepo, fullName }) {
  return (
    <WrapperCard>
      <WrapperTitle>{name}</WrapperTitle>
      <WrapperFullName>Full Name: </WrapperFullName>
      <WrapperLink href={linkRepo} target='_blank' rel='noreferrer'>{fullName}</WrapperLink>
    </WrapperCard>
  );
}

export default CardRepository;