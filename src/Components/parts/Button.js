import styled from "styled-components";

export default function Button({ width, heigt, bolean, ...func}){
    return(
        <Butto width={width} bolean={bolean} heigt={heigt} {...func} ></Butto>
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
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
`;