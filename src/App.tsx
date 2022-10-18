import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { UserPage } from "./components/UserPage";
import { TodosPage } from "./components/TodosPage";

export const App = () => {
    return (
        <BrowserRouter>
            <div>
                <NavLink to='/users'>Пользователи</NavLink>
                <NavLink to='todos'>Список дел</NavLink>
            </div>
            <Routes>
                <Route path='/users' element={<UserPage/>}/>
                <Route path='/todos' element={<TodosPage/>}/>
            </Routes>
        </BrowserRouter>

    );
};
