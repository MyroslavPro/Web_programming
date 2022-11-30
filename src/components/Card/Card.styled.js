import styled from "styled-components";

const CardStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 250px;
    height: 360px;
    margin: 2em;

    font-size: small;
    overflow: hidden;
    background: #fffffff9;
    border-radius: 15px;
    box-shadow: 0 30px 34px  rgba(178, 176, 176, 0.25);  
    h2{
        line-height: 0.25em;
    }
    p{
        text-align: justify;
        padding: 0 1em;
    }
`;

export default CardStyled;