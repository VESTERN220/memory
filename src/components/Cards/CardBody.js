import React from "react";
import  css from './CardBody.module.css'

const CardBody = ({
                      colorBak,
                      flipped,
                      handleClick,
                      id,
                      decision,
                      disabled
                  }) => {
    let styleClass = [css.card]
    let  classCard ='card'+ (flipped ? colorBak : 'Flipped')
    styleClass.push(css[classCard])
    let opacityCard = decision ? css.cardDelete : css.cardShow
    styleClass.push(opacityCard)

    return (
        <button
            onClick={() => handleClick(id)}
            disabled={flipped || disabled}
            className={styleClass.join(' ')}
        >
        </button>
    )
}

export default CardBody