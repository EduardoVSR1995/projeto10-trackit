import { Container,Text } from "./Subparts";
import image1 from '../image/image1.png';
import image2 from '../image/image2.png';
import image3 from '../image/image3.png';
import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { postCheck, postUncheck } from "./trackit";
import UserContext from "./UserContext";

export default function CheckHabti({value}){
    const {user ,setUser} = useContext(UserContext);
    const [state, setstate] = useState({});
    useEffect(()=>{
        setstate(value);
        },[]
    )
    function togle(){
        if(!state.done){
            setUser({...user, percent: (user.percent + 1/user.total) });
            setstate({...state, done: !state.done , currentSequence: state.currentSequence+1 , highestSequence:state.highestSequence+1 });
            postCheck( state.id ,{ headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess)
            console.log(state.done)
            
        }
        else{
            setUser({...user, percent: (user.percent - 1/user.total)});
            setstate({...state, done: !state.done , currentSequence: state.currentSequence-1 , highestSequence:state.highestSequence-1 });
            postUncheck( state.id ,{ headers: { Authorization: `Bearer ${user.token}` } }).catch(err).then(sucess)   
        }

    }
    function sucess(value){
        const i = value.data;
        setUser({...user, percent: user.percent });
    }

    function err(value){
        console.log(value);
        return alert(value);

    }
    return(
        <Container size={"auto"}>
            <All>
                <h2>
                    <Text>{value.name} </Text><br/>
                    <Text font={"min"}> Sequência atual:<Style togle={state.currentSequence} > { state.currentSequence } dias</Style> </Text>
                    <Text  font={"min"}>Seu recorde:<Style togle={state.highestSequence} > { state.highestSequence} dias</Style> </Text>
                </h2>
                <Imag onClick={togle} src={ state.done ? image3 : image2  } />
                <Imag1 onClick={togle} src={image1} />
            </All>
        </Container>
    )
}
const Style = styled.div`
    color: ${props=> props.togle > 0 ? "#8FC549" : "" };
`

const Imag = styled.img`
    position: relative;
    left:40px;
`;
const Imag1 = styled.img`
   position: relative;
   height: 28px ;
   top: 20px;
   right: 10px;

`; 

const All = styled.div`
        display: flex;
    h2{
        width: 90%;
    }

`;