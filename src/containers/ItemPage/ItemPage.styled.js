import styled from "styled-components";

const ItemPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    font-size: small;
    overflow: hidden;
    background: #fffffff9;
    align-items: center;
    justify-content: space-between;
    margin: 0 3%;
    padding: 2em;
    height: 70%;
    img{
        width: 40%;
        margin-right: 3em;
    }
    .info{
        display: flex;
        flex-direction: column;
        align-items: flex-start;

    }
    
    .classItemDescription{
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    h2{
        align-self: left;
        margin-top: 2em;
        margin-bottom: 2em;
        line-height: 0.25em;
    }
    p{
        text-align: justify;
    }
    
    
`;
export const ContainerCharacteristicsStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    p{
        color: #000;
        margin: 0.5em;
        span {
            background: lightcoral;
            border-radius: 0.5em;
            color: white;
            border: 0;
            padding: 0.5em 1em;
        }
    }
`

export const FooterItem = styled.div`
    margin-top: 8em;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    .buttons-footer> button{
        margin:0 0.5em;
        padding: 0.5em;
    }
`

export default ItemPageStyled;