import styled from "styled-components";

export const HeaderContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: rgb(0,0,0,0.8);
    color: white;
    font-size: large;
    border: 1px solid black;
    padding: 0.5em 2em;

    .active{
        background-color: darkgray;
    }

    img {
        width: 8%;
        height: 8%;
    }

    ul{
        display: flex;
        flex-direction: row;
        list-style-type: none;
        
        align-self: center;
        align-items: center;
        
        li{
            margin: 0 0.5em;
        }
    }
     
    a {
        padding: 0.5em;
        background-color: gray;
        border-radius: 5px;
        text-decoration: none;
        color: white;
    }

    h1{
        font-size: larger;
        color : black
    }
`
export const Authorization = styled.div`
    display: flex;
    flex-direction: row;
`
export const Button = styled.button`
    margin: 0.5em;
    padding:  0.25em 0.5em;
    font-size: larger;
    color: ${(props) => props.color};
    background: transparent;
    border-radius: 0.5em;
    border: 1px solid ${(props) => props.color};
    cursor: pointer;

    :hover{
        transition: 0.3s;
        transform: translateY(-3%);
    }
`