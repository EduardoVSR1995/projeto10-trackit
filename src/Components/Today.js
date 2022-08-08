import dayjs from "dayjs";
import styled from "styled-components";
import { week, Topo, Basebar } from "./parts/Subparts";
import { useState, useContext, useEffect } from "react";
import UserContext from './parts/UserContext';
import { getToday } from "./parts/trackit";
import CheckHabti from "./parts/CheckHabti";
import logo from './image/tra.png'

export default function Today() {
    const { user, setUser } = useContext(UserContext);
    const [today, setToday] = useState({ i: [] });
    const o = dayjs();
    useEffect(() => {
        const promis = getToday({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.then(sucess);
        promis.catch(err);
    }, []);

    function sucess(value) {
        const i = value.data;
        setToday({ ...today, i })
    }

    function err(value) {
        return alert(value);
    }
    console.log(user.percent === undefined, 0.08 > user.percent)
    return (
        <AllContainer>
            <Topo logo={logo} image={user.image}> </Topo>
            <p>{week[o.$W]} , {o.format('DD/MM')}</p>
            {user.percent === undefined || 0.08 < user.percent ? <Span>{(user.percent * 100).toFixed(0)}% hábitos concluídos</Span> : <Span bolean={true}> Nenhum hábito concluído ainda</Span>}
            <AllHabtis>
                {today.i.length !== 0 ? today.i.map((value, index) => <CheckHabti key={index} value={value} index={index} today={today} setToday={setToday} />) : ""}
            </AllHabtis>
            <Basebar percent={ user.percent !== undefined ? 1-user.percent : 0 }></Basebar>
        </AllContainer>
    )
}

const AllHabtis = styled.div`
    margin-top: 28px;
    overflow: auto;
    max-height: 150vw;

    
`;

const AllContainer = styled.div`
    padding-top: 20px;
    width: 100%;
    height: 100%;
    background-color:#E5E5E5 ;
    p{
    padding-left: 20px;
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
    justify-content:flex-start ;
    }
   
    `;
const Span = styled.span`
        padding-left:20px;
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: ${props => props.bolean ? '#BABABA' : '#8FC549'};
    `;