import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from './image/logo.png'

export default function Enter(){
    return(

        <Container>
            <img src={logo}/> 
            <form>   
            <input type={"text"} placeholder={"email"} onChange={()=> ""} /> 
            <input name={"password"} placeholder={"senha"} onChange={()=> "" }  />
             <button type="submit">Entrar</button>
            <Link to={"/"}> Não tem uma conta? Cadastre-se! </Link>
             </form>
        </Container> 
    )

}

const Container = styled.div`
    margin-top: 68px ;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    a{
        
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #52B6FF;

    }

    form{
        margin-top: 33px;
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    
    }
    input::placeholder{
        cursor: pointer;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;

    }
    input{
        padding: 10px;
        width: 100%;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        background: #FFFFFF;
        margin-bottom: 5px;
        
    }
    button{
        cursor: pointer;
        border-style: none;
        margin-bottom:25px ;
        width: 303px;
        height: 45px;
        left: 36px;
        top: 381px;
        background: #52B6FF;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;

    }
`;