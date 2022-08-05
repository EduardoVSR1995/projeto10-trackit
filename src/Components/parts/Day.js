import styled from "styled-components";
import { useState} from 'react';


export default function Day({value , setPersonalDate, personalDate, number, modal, daySelect}){
    const [personal ,setPersonal] = useState(true);
    number===0 ? number=7 : number=number
    function add(){
        const t = personalDate.days.length !== 0 ?  personalDate.days.map((e)=>e) : [];
        t.push(number);
        setPersonalDate({...personalDate, days: t})
        setPersonal(!personal);
    }
    function del(){
        setPersonalDate({...personalDate, days: personalDate.days.filter((e)=>  e !== number) });
        setPersonal(!personal);
    }
    if(modal !== undefined){
        const day = daySelect.filter((value)=> value === number);
        const perso = day.length !== 0 ? true : false;
    return(
        <Unit bolean={true}  personal={!perso} >{value}</Unit> 
    )
    }
    else{
        return(
            <Unit bolean={personalDate.bolean2}  personal={personal} onClick={()=> personal ? add() : del() } >{value}</Unit>
        )
    }

}

const Unit = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1px 2px;
    width: 30px;
    height: 30px;
    background: ${props=> !props.personal ? "#DBDBDB" : "#FFFFFF"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: ${props=> props.personal ? "#DBDBDB" : "#FFFFFF"} ;
    opacity: ${props=> props.bolean ? 1 : 0.4} ;;


`;
