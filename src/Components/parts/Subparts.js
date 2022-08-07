import styled from "styled-components";
import  {  CircularProgressbar , buildStyles }  from  'react-circular-progressbar' ; 
import  'react-circular-progressbar/dist/styles.css' ;
import { Link } from "react-router-dom";


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
    return(
        <Butto width={width} bolean={bolean} heigt={heigt} {...func} >{!bolean ? scrib : "lading..."}</Butto>
    )

}
const Butto = styled.button`
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
    width: 80%;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: ${props=> props.font !== undefined ? "13px" : "20px" };
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
        -webkit-box-shadow:0 0 0 50px white inset ;
        padding: 10px;
        width: 100%;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        height: 45px;
        margin-bottom: 5px;
        background: ${(props) => !props.background ? "#FFFFFF" : "#F2F2F2" };
        color:${(props) => !props.background ? "#666666" : "#D4D4D4" };
        opacity: ${(props) => !props.background ? 1 : 0.4 } ;
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
    max-height: 51px;
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


export {Container, Button ,Text , days , week, Input, Topo , Basebar}
