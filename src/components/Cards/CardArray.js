import React from 'react';
import CardBody from './CardBody';

// eslint-disable-next-line import/prefer-default-export
export const CardArray = ({
  cards,
  handleClick,
  flipped,
  decision,
  disabled,
}) => cards.map((data) => (
  <CardBody
    key={data.id}
    id={data.id}
    flipped={flipped.includes(data.id)}
    handleClick={() => handleClick(data.id)}
    colorBak={data.type}
    decision={decision.includes(data.id)}
    disabled={disabled}
  />
));
