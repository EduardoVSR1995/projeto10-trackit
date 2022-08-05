import styled from "styled-components"
import { Container, Text ,days } from "./Subparts"
import scrap from '../image/lixeira.png'
import Day from "./Day";

export default function Everyhabt({obj}){
    return(
        <Container size={"min"} >
           <Text>{obj.name} </Text><Img src={scrap}/>
           <Days>{days.map((value,index)=> <Day key={index} value={value} modal={true} number={index} daySelect={obj.days}> </Day>)}</Days>
            </Container>
    )
}
const Img = styled.img`
    position: relative;
    bottom: 20px;
    left: 315px;
`;

const Days = styled.div`
    position: relative;
    bottom: 10px;
    width: 320px;
    display: flex;
    
`;
