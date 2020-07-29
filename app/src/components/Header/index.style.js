import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
`;
export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1030px;
    height: 80px;
    margin: 0 auto;
    padding: 0 25px;
    background-color: #fff;
`;