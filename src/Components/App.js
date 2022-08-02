import {BrowserRouter, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import Enter from './Enter';

export default function App(){
    return(
    <>
        <ResetStyled />
        <Wrapper>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Enter/>}/>
                    
                </Routes>
            
            </BrowserRouter>
        </Wrapper>
    </>
    );
}
const Wrapper = styled.div`
 height: 100vh;
`