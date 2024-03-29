import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import logo from './image/tra.png'
import { Button, Topo ,Basebar } from "./parts/Subparts";
import CreatHabits from "./parts/CreatHabits";
import UserContext from './parts/UserContext';
import { getHeader, getToday } from "./parts/trackit";
import Everyhabt from './parts/Everyhabt';


export default function Habits() {
    const { user, setUser } = useContext(UserContext);
    const [add, setAdd] = useState({ bolean: true });
    useEffect(() => {
        getToday({ headers: { Authorization: `Bearer ${user.token}` } }).catch(err1).then(sucess1);
        const promis = getHeader({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.then(sucess);
        promis.catch(err);
    }, []);

    if (user.reload !== undefined) {
        const promis = getHeader({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.then(sucess);
        promis.catch(err);
        setUser({ ...user, reload: undefined })
    }
    function reload2() {
        getToday({ headers: { Authorization: `Bearer ${user.token}` } }).catch(err1).then(sucess1);

    }

    function sucess1(value) {
        setUser({ ...user, percent: (value.data.filter((i) => i.done === true).length) / value.data.length, total: value.data.length, reload2 });
    }

    function err1(value) {
        alert(value);
    }


    function sucess(value) {
        setAdd({ ...add, objects: value.data });
    }

    function err(value) {
        alert(value);
    }


    return (
        <>
            <Container>
                <Topo logo={logo} image={user.image}> </Topo>
                <p>Meus hábitos  <Button width={'45px'} heigt={'35px'} onClick={() => add.bolean ? setAdd({ ...add, bolean: !add.bolean }) : setAdd({ ...add, bolean: add.bolean })} scrib={"+"} ></Button></p>
                {!add.bolean ? <CreatHabits setAdd={setAdd} add={add} /> : ""}
                <AllHabits>
                    {add.objects === undefined || add.objects.length === 0 ? <h1>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito<br /> para começar a trackear! </h1> : add.objects.map((value, index) => <Everyhabt key={index} obj={value} />)}
                </AllHabits>
                <Basebar percent={ user.percent !== undefined ? 1-user.percent : 0 }></Basebar>
            </Container>
        </>
    )
}

const AllHabits = styled.div`
    overflow: auto;
    height: 80vh;
`;


const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color:#E5E5E5 ;
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-left: 20px;
    }
    p{
    margin-top:70px ;
    padding: 20px;
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
