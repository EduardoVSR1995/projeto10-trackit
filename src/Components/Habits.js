import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { Button } from "./parts/Subparts";
import CreatHabits from "./parts/CreatHabits";
import UserContext from './parts/UserContext';
import { getHeader } from "./parts/trackit";
import Everyhabt from './parts/Everyhabt';


export default function Habits() {
    const { user, setUser } = useContext(UserContext);
    const [add, setAdd] = useState({ bolean: true });
    const value = 0.50;

    console.log(user)

    useEffect(() => {
        const promis = getHeader({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.then(sucess);
        promis.catch(err);
    }, []);

    if (user.reload !== undefined) {
        console.log(user);
        const promis = getHeader({ headers: { Authorization: `Bearer ${user.token}` } });
        promis.then(sucess);
        promis.catch(err);
        setUser({ ...user, reload: undefined })
    }

    function sucess(value) {
        setAdd({ ...add, objects: value.data });

    }
    function err(value) {
        console.log(value);
    }
    return (
        <>
            <Container>
                <p>Meus hábitos  <Button width={'45px'} heigt={'35px'} onClick={() => add.bolean ? setAdd({ ...add, bolean: !add.bolean }) : setAdd({ ...add, bolean: add.bolean })} scrib={"+"} ></Button></p>
                {!add.bolean ? <CreatHabits setAdd={setAdd} add={add} /> : ""}
                <AllHabits>
                    {add.objects === undefined || add.objects.length === 0 ? <h1>Você não tem nenhum hábito <br /> cadastrado ainda. Adicione um hábito<br /> para começar a trackear! </h1> : add.objects.map((value, index) => <Everyhabt key={index} obj={value} />)}
                </AllHabits>
            </Container>
        </>
    )
}

const AllHabits = styled.div`
    overflow: auto;
    max-height: 180vw;
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
