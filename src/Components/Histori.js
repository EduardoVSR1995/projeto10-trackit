import { Text } from "./parts/Subparts";
import styled from "styled-components";

export default function Histori(){
    return(
        <AllContainer>
            <p> Histórico </p>
             { true ? <Text >Em breve você poderá ver o histórico dos seus hábitos aqui! </Text> : "" }

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