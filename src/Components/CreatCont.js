import logo from './image/logo.png'
import { useState} from 'react';
import { Link, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {postCreat } from './parts/trackit';
import {Button, Input} from './parts/Subparts';



export default function CreatCont(){
    const [personalDate, setPersonalDate]= useState({});
    const [lo , setLo] = useState(false);
    const navigate = useNavigate()
    function submitobj(event){ 
        const obj={
            email:personalDate.email,
            name:personalDate.name,
            image:personalDate.image,
            password:personalDate.password
        }
        event.preventDefault();
            const promise = postCreat(obj);
            promise.catch(err);
            promise.then(sucess);
        }
    function err(value){
        return alert(value), setLo(!lo);
    }
    function sucess(){
        return navigate("/", alert("Parabéns, cadastro concluído") );
    }

    return(
        <>
        <Container>
            <img src={logo}/> 
        </Container>
        <Container>
            <form onSubmit={submitobj}>   
                <Input type={"email"} background={lo} placeholder={"email"} onChange={e => setPersonalDate({...personalDate, email: e.target.value})}  required readOnly={lo}/> 
                <Input type={"password"} background={lo} placeholder={"senha"} onChange={e => setPersonalDate({...personalDate, password: e.target.value})}  required  readOnly={lo}/>
                <Input type={"text"} background={lo} placeholder={"nome"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})} required readOnly={lo}  />
                <Input type={"url"} background={lo} placeholder={"foto"} accept={"url"} onChange={e => setPersonalDate({...personalDate, image: e.target.value})} required  readOnly={lo}/>        
                <Button type={"submit"} width={"100%"} bolean={lo} heigt={"45px"} onClick={()=>{!lo ? setLo(!lo): setLo(lo)}} scrib={"Entrar"}> </Button>
                <Link to={"/"}> Já tem uma conta? Faça login!</Link>
            </form>
        </Container>
        </>
    )
}

const Container = styled.div`
    margin: 10% 0px 5% 10%  ;
    width: 80%;
    display: flex ;
    justify-content: center;
    align-items: center;
    
    form{
        margin-top: 33px;
        width: 100%;
        text-align: center ;
        a{
        margin-top: 25px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #52B6FF;
      }
    }
    `;

