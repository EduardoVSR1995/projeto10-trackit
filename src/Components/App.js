import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';

export default function App(){
    return(
    <>
        <ResetStyled />
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Enter/>}/>
                    <Route path="/cadastro" element={<CreatCont/>}/>
                    
                </Routes>
            
            </BrowserRouter>
        </Wrapper>
    </>
    );
}
const Wrapper = styled.div`
 height: 100vh;
`