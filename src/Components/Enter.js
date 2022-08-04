import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from './image/logo.png'
import { postLogin } from "./trackit";
import Button from "./parts/Button";

export default function Enter(){
    const [loginDate , setLogindate] = useState({});
    const [lo , setLo] = useState(false);
    const navigat = useNavigate()
    function login(event){
        event.preventDefault();
        const promise = postLogin(loginDate,"login");
        promise.catch(err);
        promise.then(sucess);
        
    }
    function sucess(value){
        const obj= value.data;
        console.log(value);
        return  navigat("/habitos", {state:{obj}});
    }
    function err(value){
        console.log(value)
        return alert(value),setLo(!lo);
    }
    return(

        <Container>
            <img src={logo}/> 
            <form onSubmit={login} disabled={lo} >   
                <Input type={"email"} background={lo} placeholder={"email"} onChange={e => setLogindate({...loginDate, email: e.target.value })} required readOnly={lo}/> 
                <Input type={"password"} background={lo} placeholder={"senha"} onChange={e => setLogindate({...loginDate, password: e.target.value }) }  required readOnly={lo}/>
                <Button type={"submit"} width={"100%"} bolean={lo} heigt={"45px"} onClick={()=>{!lo ? setLo(!lo): setLo(lo)}} > { !lo ? "Entrar" : "loading..." } </Button>
                <Link to={"/cadastro"}> Não tem uma conta? Cadastre-se! </Link>
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
        margin-top: 25px;
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
    `;

const Input  = styled.input`
        cursor: pointer;
        -webkit-box-shadow:0 0 0 50px white inset ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        margin-bottom: 5px;
        background: ${(props) => !props.background ? "#FFFFFF" : "#F2F2F2" };
        color:${(props) => !props.background ? "#666666" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.4 } ;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;

        ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;
        color: #DBDBDB ;
        }
        :focus, select:focus {
        border: 1 none;
        outline: 0;
        }    
    

`;