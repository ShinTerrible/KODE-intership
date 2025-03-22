import { MainPage } from "../../pages/main-page";
import { Routes, Route, useLocation } from 'react-router-dom';
import { DetailsPage } from "../../pages/details";
import style from './style.module.css'
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../store/store";
import { getAllUsers, getErrorCode, getUsers } from "../../slices/users";
import { Modal } from "../modal/Modal";

import clsx from "clsx";

export const App = () => {
    const dispatch = useDispatch()
    const location = useLocation();
    const background = location.state?.background;
    let users = useSelector(getUsers)

    useEffect(() => {
        dispatch(getAllUsers())
        // dispatch(getErrorCode()) //500 ошибка


    }, [dispatch]);

    return (
        <div className={clsx([style.app, style.theme])}>
            <Modal />
            <Routes location={background || location}>
                <Route path='/' element={
                    <MainPage />
                } />
                <Route path='/:id' element={<DetailsPage />} />
            </Routes>
        </div>
    )
}

