import React from 'react';
import css from './CardBody.module.css';
/* eslint react/prop-types: 0 */

const CardBody = ({
  colorBak,
  flipped,
  handleClick,
  id,
  decision,
  disabled,
}) => {
  const styleClass = [css.card];
  const classCard = `card${flipped ? colorBak : 'Flipped'}`;
  styleClass.push(css[classCard]);
  const opacityCard = decision ? css.cardDelete : css.cardShow;
  styleClass.push(opacityCard);

  return (
    <button
      type="button"
      onClick={() => handleClick(id)}
      disabled={flipped || disabled}
      className={styleClass.join(' ')}
    />
  );
};

export default CardBody;
