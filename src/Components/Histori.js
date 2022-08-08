import { Container, Text } from "./parts/Subparts";
import styled from "styled-components";
import { getHistori } from "./parts/trackit";
import UserContext from './parts/UserContext';
import { useContext, useEffect, useState  } from "react";

export default function Histori(){
    const {user ,setUser} = useContext(UserContext);
    const [histori , setHistori] = useState({});

    useEffect(() => {
        const promis = getHistori({ headers: { Authorization: `Bearer ${user.token}` } });    
        promis.catch(err);
        promis.then(sucess);
    }, []);

    function sucess(value) {
        console.log(value)
        setHistori({...histori , allHabit: value.data})
    }

    function err(value) {
        alert(value);
    }
    console.log(histori.allHabit)
    
    return(
        <AllContainer>
            <p> Histórico </p>
            { histori.allHabit !== undefined ? <Text >Em breve você poderá ver o histórico dos seus hábitos aqui! </Text> :   "" }

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