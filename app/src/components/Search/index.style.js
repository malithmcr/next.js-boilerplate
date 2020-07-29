import styled from 'styled-components';
import { device } from '../../utils/device';

export const SearchWrapper = styled.div`
    flex-grow: 0;
    position: relative;
    margin: 0 2rem;
    transition: width .6s ease-in-out;
    width: 100%;
    max-width: 190px;
    margin: 0 0 0 -48px;
    @media ${device.laptop} { 
        margin: 0 2rem;
    }

    input{
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        padding: 10px 20px 10px 40px;
        border: none;
        border-radius: 40px;
        background-color: #e6ecf0;
        color: #132f48;
        outline: none;
        -webkit-appearance: textfield;
        outline-offset: -2px;
        transition: all .5s ease-in-out;
    }
    &.sticky{
        width: 42px;
        input{
            transition: color .3s ease-in-out;
            padding: 20px;
        }
    }
`;

export const Placeholder = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    left: 15px;
    color: #b8c0c8;
`;