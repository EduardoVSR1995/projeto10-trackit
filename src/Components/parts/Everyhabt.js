import styled from "styled-components"
import { Container, Text ,days } from "./Subparts"
import scrap from '../image/lixeira.png'
import Day from "./Day";
import { delHabts } from "./trackit";
import UserContext from './UserContext';
import { useContext } from "react";

export default function Everyhabt({obj}){
    const {user ,setUser} = useContext(UserContext);
    function del(){
        const boole =  window.confirm("desejaexcluir o habito")
        if(boole){
        const promis = delHabts(obj.id , {headers: {Authorization: `Bearer ${user.token}`}} )
        promis.then(sucess);
        promis.catch(err);
        }
    }
    function sucess(){
        setUser({...user, reload:true })
        user.reload2();        
    }
    function err(value){
        alert(value)

    }

    return(
        <Container size={"min"} >
           <Text>{obj.name} </Text><Img onClick={del} src={scrap}/>
           <Days>{days.map((value,index)=> <Day key={index} value={value} modal={true} number={index} daySelect={obj.days}> </Day>)}</Days>
        </Container>
    )
}
const Img = styled.img`
    position: relative;
    left: 99% ;
    bottom: 20% ;
`;

const Days = styled.div`
    bottom: 10px;
    width: 320px;
    display: flex;
    
`;
