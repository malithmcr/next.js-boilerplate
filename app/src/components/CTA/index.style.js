import styled from 'styled-components';

export const CTAWrapper = styled.div`
    display: flex;
    padding: 13px 25px;
    border-radius: 54px;
    color: #fff;
    background: #0096ff 0 0 no-repeat padding-box;
    box-shadow: 0 3px 6px rgba(0,0,0,.1);
    font-family: Sans-Serif;
    cursor: pointer;
`;

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin-right: 9px;
    img{
        width: 12px;
        height: 14px;
        object-fit: cover;
        object-position: center;
    }
`;
