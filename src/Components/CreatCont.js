import logo from './image/logo.png'
import { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {postLogin } from './trackit';
import Button from './parts/Button';


export default function CreatCont(){
    const [personalDate, setPersonalDate]= useState({});
    const [lo , setLo] = useState(false);
    const navigate = useNavigate()
    function submitobj(event){ 
        event.preventDefault();
            const promise = postLogin(personalDate, "sign-up" );
            promise.catch(err);
            promise.then(sucess);
        }
    function err(value){
        return alert(value), setLo(!lo);
    }
    function sucess(){
        console.log("ola")
        return navigate("/", alert("Parabéns, cadastro concluído") );
    }

    return(
        <Container>
            <img src={logo}/> 
            <form onSubmit={submitobj}>   
                <Input type={"email"} background={lo} placeholder={"email"} onChange={e => setPersonalDate({...personalDate, email: e.target.value})}  required readOnly={lo}/> 
                <Input type={"password"} background={lo} placeholder={"senha"} onChange={e => setPersonalDate({...personalDate, password: e.target.value})}  required  readOnly={lo}/>
                <Input type={"text"} background={lo} placeholder={"nome"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})} required readOnly={lo}  />
                <Input type={"url"} background={lo} placeholder={"foto"} accept={"url"} onChange={e => setPersonalDate({...personalDate, image: e.target.value})} required  readOnly={lo}/>        
                <Button type={"submit"} width={"100%"} bolean={lo} heigt={"45px"} onClick={()=>{!lo ? setLo(!lo): setLo(lo)}} > { !lo ? "Entrar" : "loading..." } </Button>
            </form>
         <Link to={"/"}> Já tem uma conta? Faça login!</Link>
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
        font-family: 'Lexend Deca';
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