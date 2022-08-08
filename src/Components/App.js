import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
import Habits from './Habits';
import UserContext from './parts/UserContext';
import Today from './Today'
import Histori from './Histori';

export default function App() {
    const [user, setUser] = useState([]); 
    

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <ResetStyled />
                <Wrapper>
                    <BrowserRouter>
                        <Routes>
                            <Route path="/" element={<Enter />} />
                            <Route path="/cadastro" element={<CreatCont />} />
                            <Route path='/habitos' element={<Habits />} />
                            <Route path='/hoje' element={<Today />} />
                            <Route path='/historico' element={<Histori />} />

                        </Routes>
                    </BrowserRouter>
                </Wrapper>
            </UserContext.Provider>
        </>
    );
}
const Wrapper = styled.div`
 height: 230vw;
 max-width: 400px ;
`;