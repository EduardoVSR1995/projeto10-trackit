import { Text, Topo, Basebar, Calenda } from "./parts/Subparts";
import styled from "styled-components";
import { getHistori } from "./parts/trackit";
import UserContext from './parts/UserContext';
import { useContext, useEffect, useState } from "react";
import logo from './image/tra.png'



export default function Histori() {
    const { user, setUser } = useContext(UserContext);
    const [histori, setHistori] = useState({});
    useEffect(() => {
        const promis = getHistori({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.catch(err);
        promis.then(sucess);
    }, []);

    function sucess(value) {
        setHistori({ ...histori, allHabit: value.data })
    }

    function err(value) {
        alert(value);
    }
    const day = [];
    const dayTrue = [];
    const mount = [];
    const mountTrue = [];
    const obj = histori.allHabit !== undefined ? histori.allHabit.map((value) => value.habits.filter((i) => i.done === false)) : "";
    const obj2 = histori.allHabit !== undefined ? histori.allHabit.map((value) => value.habits.filter((i) => i.done === true)) : "";


    for (let index = 0; index < obj.length; index++) {
        if (obj[index].length !== 0) {
            if (obj[index][0].date[9] === 0) {
                day.push(Number(obj[index][0].date[9]));
            }
            if (obj[index][0].date[9] !== 0) {
                day.push(Number(obj[index][0].date[8] + obj[index][0].date[9]));
            }
            if (mount[mount.length - 1] !== obj[index][0].date[6] && obj[index][0].date[5] === 0) {
                mount.push(Number(obj[index][0].date[6]));
            }
            if (mount[mount.length - 1] !== Number(obj[index][0].date[6]) && obj[index][0].date[5] !== 0) {
                mount.push(Number(obj[index][0].date[5] + obj[index][0].date[6]));

            }
        }

    }

    for (let index = 0; index < obj2.length; index++) {
        if (obj2[index].length !== 0) {
            if (obj2[index][0].date[9] === 0) {
                dayTrue.push(Number(obj2[index][0].date[9]));
            }
            if (obj2[index][0].date[9] !== 0) {
                dayTrue.push(Number(obj2[index][0].date[8] + obj2[index][0].date[9]));
            }
            if (mountTrue[mountTrue.length - 1] !== obj2[index][0].date[6] && obj2[index][0].date[5] === 0) {
                mountTrue.push(Number(obj2[index][0].date[6]));
            }
            if (mountTrue[mountTrue.length - 1] !== Number(obj2[index][0].date[6]) && obj2[index][0].date[5] !== 0) {
                mountTrue.push(Number(obj2[index][0].date[5] + obj2[index][0].date[6]));

            }
        }

    }

    const objList = { day: day, dayTrue: dayTrue, mount: mount, mountTrue: mountTrue }

    return (
        <AllContainer  >
            <Topo logo={logo} image={user.image}> </Topo>
            <p> Histórico </p>
            {histori.allHabit === undefined ? <Text >Em breve você poderá ver o histórico dos seus hábitos aqui! </Text> : ""}
            <Calendar><Calenda objList={objList}> </Calenda></Calendar>
            <Basebar percent={user.percent !== undefined ? 1 - user.percent : 0}></Basebar>
        </AllContainer>
    )

}
const Calendar = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`;

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
