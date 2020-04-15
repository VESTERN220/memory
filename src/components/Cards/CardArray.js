import React from "react";
import CardBody from "./CardBody";

export const CardArray = ({
                              cards,
                              handleClick,
                              flipped,
                              decision,
                              disabled
                          }) =>
    cards.map((data) => {
        return <CardBody
                        key={data.id}
                        id={data.id}
                        flipped={flipped.includes(data.id)}
                        handleClick={() => handleClick(data.id)}
                        colorBak={data.type}
                        decision={decision.includes(data.id)}
                        disabled={disabled} />
    })
