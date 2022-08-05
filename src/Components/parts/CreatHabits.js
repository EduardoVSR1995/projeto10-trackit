import styled from "styled-components"
import { useState, useContext} from 'react';
import Day from "./Day";
import {Button , Container ,days, Input} from "./Subparts";
import { postLoginHeader } from "./trackit";
import UserContext from "./UserContext";

export default function CreatHabits({setAdd, add}){
    const {user , setUser} = useContext(UserContext)
    const [personalDate ,setPersonalDate] = useState({bolean2:true , bolean: false, days:[]});
    function creat(){
        if(personalDate.days.length===0 || personalDate.name === undefined){
            alert("Escolha pelo menos um dia da semana ou coloque um habito");         
        }
        else{
            setPersonalDate({...personalDate, bolean2: !personalDate.bolean2});
            const  head = {
                headers:{
                    Authorization: `Bearer ${user.objUser.token}`
                }
            } 
            const obj={
                name:personalDate.name,
                days: personalDate.days
            }


            const promis = postLoginHeader(obj,head)
            promis.catch(err);
            promis.then(sucess);
        }
    }
    function err(value){
        console.log(value);            
        alert(value);
        setPersonalDate({...personalDate, bolean2: personalDate.bolean2})        
    }
    function sucess(value){
        alert("Parabéns vocẽ criou um novo abito :)");
        setAdd({...add, bolean: !add.bolean });
        setUser({...user, objLocal:value})
    }

    
    return(
        <Container size={'mediun'} >
            <Input type={"text"} background={!personalDate.bolean2} placeholder={"nome do hábito"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})}  required readOnly={!personalDate.bolean2}/> 
                <Days>{days.map((value, index)=>  <Day key={index} value={value} setPersonalDate={setPersonalDate} personalDate={personalDate} number={index}/> )} </Days>
                <Barbuton bolean={!personalDate.bolean2}> <div  onClick={() => setAdd({...add, bolean: !add.bolean})}>Cancelar</div> &nbsp;&nbsp;<Button bolean={!personalDate.bolean2} type="text" width={"84px" } scrib={"Salvar"} heigt={"35px"} onClick={creat}> </Button></Barbuton>
        </Container>


    )
}



const Barbuton = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    width: 100%;
    color: #52B6FF;
    opacity: ${(props) => !props.bolean ? 1 : 0.4 } ;
    Button{
        font-size: 16px;
        line-height: 20px;
    }
`;

const Days = styled.div`
    width: 320px;
    display: flex;

`;
