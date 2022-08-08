import { Text, Topo, Basebar,Calenda } from "./parts/Subparts";
import styled from "styled-components";
import { getHistori } from "./parts/trackit";
import UserContext from './parts/UserContext';
import { useContext, useEffect, useState } from "react";
import logo from './image/tra.png'
import Calendar from "react-calendar";
import './css.css';



export default function Histori() {
    const { user, setUser } = useContext(UserContext);
    const [histori, setHistori] = useState({});
    useEffect(() => {
        const promis = getHistori({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.catch(err);
        promis.then(sucess);
    }, []);

    function sucess(value) {
        console.log(value)
        setHistori({ ...histori, allHabit: value.data , color: ".red" })
    }

    function err(value) {
        alert(value);
    }
    
    function allDay(value){
        const day = value.date.getDate()
        const obj =  histori.allHabit !== undefined ? histori.allHabit.map((value)=> value.habits.filter((i)=> i.done === false )) : "";
        
        console.log(obj);

    }

    console.log(histori)
    return (
        <AllContainer  >
            <Topo logo={logo} image={user.image}> </Topo>
            <p> Histórico </p>
            {histori.allHabit === undefined ? <Text >Em breve você poderá ver o histórico dos seus hábitos aqui! </Text> : ""}
            <Calenda ><Calendar tileClassName={'red'}  tileDisabled={allDay}/></Calenda>
            <Basebar percent={ user.percent !== undefined ? 1-user.percent : 0 }></Basebar>
        </AllContainer>
    )

}
const AllContainer = styled.div`
    padding: 20px;
    width: 100%;
    height: 100%;
    background-color:#E5E5E5 ;
    p{
    margin-top:70px ;
    width: 100%;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    }
`;
