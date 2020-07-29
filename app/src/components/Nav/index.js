import React from "react";
import PropTypes from "prop-types";
import { NavWrapper, NavItem } from "./index.style";

/**
 * Main Navigation component
 * @component- Nav
 */
const Nav = (props) => {
  const { data, isSticky} = props;
  return (
    <NavWrapper className={isSticky ? "sticky" : ""}>
      {data.map((item) => {
        return (
          <NavItem key={item.key}>
            <a href={item.url}>{item.text}</a>
          </NavItem>
        );
      })}
    </NavWrapper>
  );
};

Nav.propTypes = {
  data: PropTypes.array.isRequired,
  isSticky: PropTypes.bool.isRequired,
};

export default Nav;
