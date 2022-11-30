import styled from "styled-components";
import DelImage from '../../../images/del-icon.png';

export const CardInCardStyled = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 0.5em;
    margin: 0.5em;

    background-color: white;
    border: 1px solid black;
    border-radius: 1em;
    box-shadow: 0 0.4em 0.6em #D3D3D3a6;
    

    .countOfCurrentItems{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-right: 6em;
        > * {
            margin: 1em; 
        }
    }

    .itemDescription{
        display: flex;
        flex-direction: row;
        align-items: center;

        h4 {
            margin-left: 2em;
            text-align: center;
        }

        img {
            width: 20%;
        }
    }

    .delete-btn{
        background-color: transparent;
        background:  center / contain no-repeat url(${DelImage}) ;
        width: 3em;
        height: 3em;
        border-radius: 5px;
        border: 0;
    }
`