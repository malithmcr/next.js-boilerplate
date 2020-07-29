import styled from 'styled-components';

export const NavWrapper = styled.ul`
    max-width: 1020px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    padding: 10px 0;
    transition: all .5s ease-in-out;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
    li{
        list-style: none;
        padding: 1.25em;
        &:first-child{
            padding-left: 0;
        }
    }
    a{
        font: bold 16px/1rem "Sans-Serif";
        color: #132f48;
        text-decoration: none;
        opacity: 0.5;
        min-width: unset;
        min-height: unset;
        transition: opacity 300ms ease;
        white-space: nowrap;
        text-transform: none;
        &:hover{
            opacity: 1;
        }
    }
    &.sticky{
        max-width: 705px;
        position: absolute;
        top: 0;
        left: 25%;
        transform: translateX(-19%);
    }
`;

export const NavItem = styled.li`

`;
