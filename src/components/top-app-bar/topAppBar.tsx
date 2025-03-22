import { getDepartment } from "../../slices/users"
import { useDispatch } from "../../store/store"

import { TopAppBarUI } from "../UI/top-app-bar/TopAppBarUI"
import { SyntheticEvent } from 'react'

export const TopAppBar = () => {
    const dispatch = useDispatch()
    const onTabButton = (e: SyntheticEvent) => {
        let value: string | null = e.currentTarget.getAttribute('value')
            dispatch(getDepartment(value as string))
    }

    return <TopAppBarUI onTabButton={onTabButton}/>
}