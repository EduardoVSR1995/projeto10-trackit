import styled from "styled-components"
import { useState} from 'react';
import Day from "./Day";
import Button from "./Button";




const days = ['D','S','T','Q','Q','S','S'];
export default function CreatHabits(){
    const [personalDate ,setPersonalDate] = useState({bolean: !true, days:[]});
    console.log(personalDate)
    function creat(){

    }
    return(
        <Container>
            <Input type={"text"} background={personalDate.bolean} placeholder={"nome do hábito"} onChange={e => setPersonalDate({...personalDate, name: e.target.value})}  required readOnly={personalDate.bolean}/> 
                <Days>{days.map((value, index)=>  <Day key={index} value={value} setPersonalDate={setPersonalDate} personalDate={personalDate} number={index+1}/> )} </Days>
                <Barbuton> Cancelar &nbsp;&nbsp;<Button width={"84px" } heigt={"35px"} onSubmit={creat}  > Salvar</Button></Barbuton>
        </Container>


    )
}

const Barbuton = styled.div`
    padding-right: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 30px;
    width: 100%;
    color: #52B6FF;
    Button{
        font-size: 16px;
        line-height: 20px;
    }
`;

const Days = styled.div`
    width: 320px;
    display: flex;

`;


const Container = styled.div`
    padding-left: 20px;
    margin: 0px 0px 30px 5%;
    width: 90%;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;


`;

const Input  = styled.input`
        
        cursor: pointer;
        margin-top: 6%;
        -webkit-box-shadow:0 0 0 50px white inset ;
        padding: 10px;
        width: 90%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        margin-bottom: 5px;
        background: ${(props) => !props.background ? "#FFFFFF" : "#F2F2F2" };
        color:${(props) => !props.background ? "#666666" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.4 } ;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;

        ::placeholder{
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 25px;
        color: #DBDBDB ;
        }

        :focus, select:focus {
        border: 1 none;
        outline: 0;
        } 


`;