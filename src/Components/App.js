import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import logo from './image/tra.png'
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
import Habits from './Habits';
import UserContext from './parts/UserContext';
import { Basebar, Topo } from './parts/Subparts'

export default function App() {
    const [user, setUser] = useState([]);
    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                <ResetStyled />
                <Wrapper>
                    <BrowserRouter>
                        {user.id === undefined ? "" : <Topo logo={logo} image={user.image}> </Topo>}
                        <Routes>
                            <Route path="/" element={<Enter />} />
                            <Route path="/cadastro" element={<CreatCont />} />
                            <Route path='/habitos' element={<Habits />} />

                        </Routes>
                        {user.id === undefined ? "" : <Basebar percent={0.5}></Basebar>}
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