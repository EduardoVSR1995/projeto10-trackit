import  {  CircularProgressbar , buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import { useLocation } from "react-router-dom"
import { useState } from "react"
import styled from "styled-components"
import Button  from "./parts/Button"
import CreatHabits from "./parts/CreatHabits"
import logo from './image/tra.png'

export default function Habits(){
    const [add, setAdd] = useState({bolean:true});
    const {state} = useLocation();
    console.log(state.obj )
    const value =  0.50; 
    return(
        <Container>
            <Topo><img src={logo} /> <Foto src={state.obj.image}/></Topo>
            <p>Meus hábitos  <Button width={'45px'} heigt={'35px'} onClick={()=> add.bolean ? setAdd({...add, bolean: !add.bolean}) :setAdd({...add, bolean: add.bolean})} >+</Button></p> 
            { add ? <CreatHabits/> : ""  }
            <h1>Você não tem nenhum hábito <br/> cadastrado ainda. Adicione um hábito<br/> para começar a trackear! </h1>
            <Basebar> Hábitos 
            <Circule>
                <CircularProgressbar value = { value }  maxValue = { 1 }  text ={ "hoje"}    background backgroundPadding={6} styles={buildStyles({backgroundColor: "#3e98c7", textSize:"20px", textColor: "#FFFFFF", pathColor: "#FFFFFF", trailColor: "transparent", textFamily:"Lexend Deca"  })} /> 
            </Circule>
            Histórico 
            </Basebar>
        </Container>
    )
}
const Circule = styled.div`
width: 91px;
height: 91px;
margin-bottom: 50px;

`;

const Container = styled.div`

    margin-top: 70px;
    width: 100%;
    height: 100%;
    background-color:#E5E5E5 ;
    h1{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
        margin-left: 20px;
    }


    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
        padding: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    
    }
`;
const Basebar =styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;


`;


const Topo = styled.div`
    position: fixed;
    left: 0px;
    top:0px;
    width: 100%;
    height: 70px;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const Foto = styled.img`
    border-radius: 50%;
    width: 51px;
    max-height: 51px;

    `;