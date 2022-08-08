import styled from "styled-components";
import  {  CircularProgressbar , buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import { Link } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner';


function Container(props){
    return(
        <Contai size={props.size} font={props.font} > {props.children}</Contai>
    )   
}
const Contai = styled.div`
    padding: 15px;
    margin: 0px 0px 30px 5%;
    width: 90%;
    background: #FFFFFF;
    border-radius: 5px;
    ${(props)=> {if(props.size==="mediun"){ return `height:180px;`;} if(props.size==="auto"){ return `height:auto;`;}if(props.size==="min"){ return `height:91px;`;} } }

`;


function Button({ width, heigt,scrib , bolean, ...func}){
    console.log(width,);
    return(
        <Butto width={width} bolean={bolean} heigt={heigt} {...func} >{!bolean ? scrib : <ThreeDots color="#FFFFFF" height={12}  width={43}/>}</Butto>
    )

}
const Butto = styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer; 
        border-style: none;
        width: ${props=> props.width};
        height: ${props=> props.heigt};
        background: #52B6FF;
        border-radius: 5px;
        font-style: normal;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
`;


function Text(props){
    return(
        <Tex font={props.font} >{props.children}</Tex>
    )
}
const Tex = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: ${props=> props.font !== undefined ? "13px" : "18px" };
    line-height: 25px;
    color: #666666;
`;


function Input({...others}){
    return(
        <Inp {...others}/> 
    )
}
const Inp = styled.input`
        cursor: pointer;
        -webkit-box-shadow: ${(props) => !props.background ? "0 0 0 50px white inset" : "0 0 0 50px #F2F2F2 inset" }  ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        margin-bottom: 5px;
        color:${(props) => !props.background ? "#666666" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.6 } ;
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


function Topo({logo, image}){
return(
    <Top><img src={logo} /> <Foto src={image}/> </Top>
)
}
const Top = styled.div`
    z-index: 1;
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
   
    img{
        margin: 0px 20px;    
    }
`;
const Foto = styled.img`
    margin: 0px 20px;
    border-radius: 50%;
    width: 51px;
    height: 51px;
    
    `;

function Basebar({percent}) {
    return (
        <Base> <Link to={"/habitos"}> Hábitos</Link>
            <Circule>
                <Link to={"/hoje"}>
                    <CircularProgressbar value={percent} maxValue={1} text={"hoje"} background backgroundPadding={6} styles={buildStyles({ backgroundColor: "#3e98c7", textSize: "20px", textColor: "#FFFFFF", pathColor: "#FFFFFF", trailColor: "transparent", textFamily: "Lexend Deca" })} />
                </Link>
            </Circule>
            <Link to={"/historico"}> Histórico</Link>
        </Base>
    )
}
const Base=styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a{
        text-decoration: none;
        color:#52B6FF ;
    }

`;
const Circule = styled.div`
width: 91px;
height: 91px;
margin-bottom: 50px;

`;


const days = ['D','S','T','Q','Q','S','S'];
const week = ["Domingo" ,"Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"]

function Calenda(props){
    return(
        <Calendar color={props.color} > {props.children} </Calendar>
    )

}

const Calendar = styled.div`
.react-calendar {
    margin-top: 10px;
    border-radius: 10px ;
    width: 350px;
    max-width: 100%;
    background: white;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
    margin-bottom: 1em;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    padding: 2em 0.5em;
  }
  .react-calendar__tile {
    max-width: 100%;
    padding: 10px 6.6667px;
    text-align: center;
    line-height: 16px;
  }

   
`;  

export { Calenda ,Container, Button ,Text , days , week, Input, Topo , Basebar}
