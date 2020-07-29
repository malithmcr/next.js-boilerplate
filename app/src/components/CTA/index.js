import React from "react";
import PropTypes from 'prop-types';
import { CTAWrapper, IconWrapper } from "./index.style";

/**
 * Shared component for all the buttons
 * @component- CTA
 */
const CTA = props => {
    const { text, isIcon, iconName } = props;
    return(
    <CTAWrapper>
        {isIcon && 
            <IconWrapper>
                <img src={`/images/${iconName}.svg`}/>
            </IconWrapper>
        }
        {text}
    </CTAWrapper>
);
}

CTA.propTypes = {
    text: PropTypes.string,
    isIcon: PropTypes.bool,
    iconName: PropTypes.string,
}

export default CTA;
