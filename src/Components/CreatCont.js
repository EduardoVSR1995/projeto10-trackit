import logo from './image/logo.png'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function CreatCont(){
    return(
        <Container>
        <img src={logo}/> 
        <form>   
        <input type={"email"} placeholder={"email"} onChange={()=> ""}  required/> 
        <input type={"password"} placeholder={"senha"} onChange={()=> "" }  required  />
        <input type={"text"} placeholder={"nome"} onChange={()=> "" }   required  />
        <input type={"text"} placeholder={"foto"} onChange={()=> "" }   required  />        
         <button type="submit">Cadastrar</button>
        <Link to={"/"}> Já tem uma conta? Faça login!</Link>
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
input:focus, select:focus {
    border: 1 none;
    outline: 0;
} 


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
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #DBDBDB;

}
input{
    cursor: pointer;
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