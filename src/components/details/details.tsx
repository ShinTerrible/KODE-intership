import { useLocation, useNavigate } from "react-router"
import { DetailsUI } from "../UI/details/DetailsUI"
import { useSelector } from "../../store/store"
import {  getIsLoading, getUsers } from "../../slices/users"
import { useEffect } from "react"
import { ErrorUI } from "../UI/error/ErrorUI"



export const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()

    let usersData = useSelector(getUsers)
    const isLoading = useSelector(getIsLoading)

    if(isLoading || !usersData) {
        return (<ErrorUI notFound={true} />)
    } 

    const user = usersData?.find((user) => 
        user.id === location.pathname.slice(1))


    if(!user) {
        return (<ErrorUI notFound={true} />)
    }

    const onHomePage = () => {
        navigate('/')
    }   

    return (<DetailsUI userData={user} onHomePage={onHomePage}/>)
}