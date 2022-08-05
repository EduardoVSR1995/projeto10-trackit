import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import logo from './image/tra.png'
import styled from 'styled-components';
import ResetStyled from '../reset/reset';
import CreatCont from './CreatCont';
import Enter from './Enter';
import Habits from './Habits';
import UserContext from './parts/UserContext';
import {Topo} from './parts/Subparts'

export default function App() {
    const [user, setUser] = useState([]);
    console.log(user);
    return (
        <>
            <ResetStyled />
            <Wrapper>
                <UserContext.Provider value={{user , setUser}}>
                      {user.length === 0 ? "" : <Topo logo={logo} image={user.objUser.image}> </Topo>}
                    <BrowserRouter>
                        <Routes>
                                <Route path="/" element={<Enter />} />
                                <Route path="/cadastro" element={<CreatCont />} />
                                <Route path='/habitos' element={<Habits />} />
                            
                        </Routes>
                    </BrowserRouter>
                </UserContext.Provider>
            </Wrapper>
        </>
    );
}
const Wrapper = styled.div`
 height: 230vw;
 max-width: 400px ;
`;