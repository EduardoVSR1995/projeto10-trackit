import styled from "styled-components"
import { useState, useContext, useEffect } from 'react';
import Day from "./Day";
import { Button, Container, days, Input } from "./Subparts";
import { postLoginHeader } from "./trackit";
import UserContext from "./UserContext";


export default function CreatHabits({ setAdd, add }) {
    const { user, setUser } = useContext(UserContext)
    const [personalDate, setPersonalDate] = useState({ bolean2: true, bolean: false, days: [], boton:true});
        useEffect(()=>{
            if(user.activUser !== undefined){
                setPersonalDate({...personalDate , name: user.activUser.name ,days:user.activUser.days }); 
        }}, [] );
    function exit(){
        setUser({...user, activUser:{days:personalDate.days, name:personalDate.name } });
        setAdd({ ...add,  bolean: !add.bolean });
          }
    function creat() {
        setPersonalDate({...personalDate, boton:true})
        if (personalDate.days.length === 0 ||  personalDate.name === undefined) {
            alert("Escolha pelo menos um dia da semana ou coloque um habito");
        }
        else {
                   
            setPersonalDate({ ...personalDate, bolean2: !personalDate.bolean2, boton: false });
            const head = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }
            const obj = {
                name: personalDate.name,
                days: personalDate.days
            }
            const promis = postLoginHeader(obj, head)
            promis.catch(err);
            promis.then(sucess);
        }
    }
    function err(value) {
        alert(value);
        setPersonalDate({ ...personalDate, bolean2: personalDate.bolean2, boton:true })
    }
    function sucess(value) {
        alert("Parabéns vocẽ criou um novo abito :)");
        setAdd({ ...add, bolean: !add.bolean });
        setUser({ ...user, objLocal: value, reload: true , activUser:undefined })
        user.reload2();
    }
    return (
        <Container size={'mediun'} >
            <Input type={"text"} background={!personalDate.bolean2} value={personalDate.name} placeholder={"nome do hábito"} onChange={e => setPersonalDate({...personalDate, name: e.target.value })}  readOnly={!personalDate.bolean2} required/>
            <Days>{days.map((value, index) => <Day key={index} value={value} list={ user.activUser === undefined ? [] : user.activUser.days  } setPersonalDate={setPersonalDate} personalDate={personalDate} boton={personalDate.boton} number={index} />)} </Days>
            <Barbuton bolean={!personalDate.bolean2}> <div onClick={() =>  personalDate.boton ? exit() : setAdd({...add, add}) }>Cancelar</div> &nbsp;&nbsp;<Button bolean={!personalDate.bolean2} type="text" width={"84px"} scrib={"Salvar"} heigt={"35px"} onClick={()=>  personalDate.boton ? creat() : "" }> </Button></Barbuton>
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
    opacity: ${(props) => !props.bolean ? 1 : 0.4} ;
    Button{
        font-size: 16px;
        line-height: 20px;
    }
`;

const Days = styled.div`
    width: 320px;
    display: flex;

`;
