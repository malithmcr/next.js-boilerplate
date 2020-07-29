import React from "react";
import PropTypes from "prop-types";
import { SearchWrapper, Placeholder } from "./index.style";

/**
 * @component- Search
 */
const Search = props => {
    const {isSticky} = props;
    return(
    <SearchWrapper className={isSticky ? "sticky" : ""}>
        <input type="search" placeholder="Search" minLength="3" />
        <Placeholder>
            <img src="/images/search.svg" />
        </Placeholder>
    </SearchWrapper>
);
}

Search.propTypes = {
    isSticky: PropTypes.bool.isRequired,
};

export default Search;
