import styled from "styled-components";


export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    min-height: 70vh; 
    padding: 3em;

    .totalPrice {
        display: flex;
        flex-direction: column;
        align-self: flex-end;
            > p {
                color: white;
            }
        //width: 90%;
    }    
    .buttons {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        width: 50em;
        > button{
            font-size: larger;
        }
    }
`