import styled from "styled-components";
import CardStyled from "../Card/Card.styled";

const CardItemStyled = styled(CardStyled)`
    border:2px solid rgb(192, 192, 192);
    p{
        padding: 0 1em;
    }

    h3 {
        width: 100%;
        align-items: center;
    }
    footer{
        padding: 0 1em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
`
export default CardItemStyled;