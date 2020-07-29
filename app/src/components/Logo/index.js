import React from "react";
import PropTypes from "prop-types";
import { LogoWrapper } from "./index.style";

/**
 * @component- Logo
 * @param { Optional } props 
 */
const Logo = props => {
    const {isSticky} = props;
    return(
    <LogoWrapper className={isSticky ? "sticky" : ""}>
        <h1>Next.js</h1>
    </LogoWrapper>
);
}


Logo.propTypes = {
    isSticky: PropTypes.bool.isRequired,
};

export default Logo;
