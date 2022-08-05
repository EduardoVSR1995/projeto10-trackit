import styled from "styled-components";

function Container(props){
    return(
        <Contai size={props.size} > {props.children}</Contai>
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
        font-size: 20.976px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: ${(props) => !props.bolean ? 1 : 0.5 };
`;


function Text(props){
    return(
        <Tex>{props.children}</Tex>
    )
}
const Tex = styled.div`
    display: flex;
    width: 80%;
    height: 20px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
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




const days = ['D','S','T','Q','Q','S','S'];



export { Container, Button ,Text , days , Input, Topo}
