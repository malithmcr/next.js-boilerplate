import styled from 'styled-components';

export const LogoWrapper = styled.div`
    flex: 1 0 auto;
    height: 28px;
    width: 197px;
    background-size: contain;
    display: inline-block;
    background-position: 0;
    background-repeat: no-repeat;
    cursor: pointer;
    position: relative;
    top: 0;
    img{
        transition: top 2s ease-in-out;
        top: 0;
        padding-right: 8px;
    }
    &.sticky{
        .logo-text{
            position: relative;
            top: -90px;
        }
    }
`;