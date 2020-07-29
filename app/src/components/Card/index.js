import React from "react";
import PropTypes from 'prop-types';
import { CardWrapper } from "./index.style";

/**
 * Shared component for preview of an article
 * @component- Card
 */
const Card = props => {
    const { title, img } = props;
    return(
    <CardWrapper>
        <img src={img} />
        <p>{title}</p>
    </CardWrapper>
);
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string,
}

export default Card;
