import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
import Habits from './Habits';

export default function App() {
    return (
        <>
            <ResetStyled />
            <Wrapper>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Enter />} />
                        <Route path="/cadastro" element={<CreatCont />} />
                        <Route path='/habitos' element={<Habits />} />
                    </Routes>
                </BrowserRouter>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
 height: 230vw;
 max-width: 400px ;
`