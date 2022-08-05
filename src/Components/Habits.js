import  {  CircularProgressbar , buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import { useLocation } from "react-router-dom";
import { useState , useContext, useEffect } from "react";
import styled from "styled-components";
import {Button}  from "./parts/Subparts";
import CreatHabits from "./parts/CreatHabits";
import logo from './image/tra.png';
import UserContext from './parts/UserContext';
import { getHeader } from "./parts/trackit";
import Everyhabt from './parts/Everyhabt';


export default function Habits(){
    const {user ,setUser} = useContext(UserContext);
    const [add, setAdd] = useState({bolean:true });
    const {state} = useLocation();
    const value =  0.50; 
    useEffect(()=> {
        setUser({...add,  objUser:state.obj});
        const promis = getHeader( user.obj!==undefined ? {headers: {Authorization: `Bearer ${user.obj.token}`}} : {headers: {Authorization: `Bearer ${state.obj.token}`}} );
        promis.then(sucess);
        promis.catch(err);
},[] );

    function sucess(value){
        setAdd({...add , objects:value.data});


    }
    function err(value){
        console.log(value);
    }
    return(
        <>
        <Container>
            <p>Meus hábitos  <Button width={'45px'} heigt={'35px'} onClick={()=> add.bolean ? setAdd({...add, bolean: !add.bolean}) :setAdd({...add, bolean: add.bolean})} scrib={"+"} ></Button></p> 
            {!add.bolean ? <CreatHabits setAdd={setAdd} add={add} /> : ""  }
            <AllHabits>
                { add.objects === undefined ?  <h1>Você não tem nenhum hábito <br/> cadastrado ainda. Adicione um hábito<br/> para começar a trackear! </h1> :  add.objects.map((value, index)=> <Everyhabt key={index} obj={value}/>)}
            </AllHabits>
        
            <Basebar> Hábitos 
            <Circule>
                <CircularProgressbar value = { value }  maxValue = { 1 }  text ={ "hoje"}    background backgroundPadding={6} styles={buildStyles({backgroundColor: "#3e98c7", textSize:"20px", textColor: "#FFFFFF", pathColor: "#FFFFFF", trailColor: "transparent", textFamily:"Lexend Deca"  })} /> 
            </Circule>
            Histórico 
          </Basebar>
          </Container>
        </>
    )
}

const AllHabits = styled.div`
    overflow: auto;
    max-height: 185vw;
`;

const Circule = styled.div`
width: 91px;
height: 91px;
margin-bottom: 50px;

`;

const Container = styled.div`
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
