import style from './style.module.css'
import { EmploeeInfoUI } from '../emploee-info/EmploeeInfoUI';
import { getIsLoading, getSortState, getUsers, userAction } from '../../../slices/users'
import { useDispatch, useSelector } from "../../../store/store"
import { ErrorUI } from '../error/ErrorUI';
import { SceletonUI } from '../emploee-info/sceletont/SceletonUI';
import { useNavigate } from 'react-router';
import { SyntheticEvent } from 'react';
import { DataConverter } from '../../../utils/mock';
import { Separator } from '../emploee-info/separator/SeparatorUI';
import { TUserApi } from '../../../utils/types';



export const EmploeeysListUI = () => {
    const usersApi = useSelector(getUsers)
    const isLoading = useSelector(getIsLoading)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const sortState = useSelector(getSortState)

    if (isLoading) {
        for (let i = 0; i <= 10; i++) {
            return <SceletonUI />
        }
    }

    if (usersApi?.length === 0) {
        return <ErrorUI notFound={false} />
    }

    const onDetails = (e: SyntheticEvent, id: string) => {
        e.preventDefault()
        navigate(`/${id}`)
    }

    const sortByBirthday = (a: TUserApi, b: TUserApi): number => {
        let dataA = DataConverter(a)
        let dataB = DataConverter(b)
        if (Number(dataA[5]) > Number(dataB[5])) return 1
        if (Number(dataA[5]) < Number(dataB[5]))  return -1
        if (Number(dataA[5]) === Number(dataB[5]) && (Number(dataA[2]) > Number(dataB[2]))) return 1
        return 0
    }


    const EmploeeComponentRender = (users: TUserApi[],) => {
        return users.map((user) => {
            let [year, month, day] = DataConverter(user)
            return <EmploeeInfoUI
                key={user.id}
                avatarUrl={user.avatarUrl}
                firstName={user.firstName}
                lastName={user.lastName}
                userTag={user.userTag}
                position={user.position}
                id={user.id}
                onUserDetails={onDetails}
                month={sortState === 'birthday' ? month : ''}
                day={sortState === 'birthday' ? day : ''}
            />
        })
    }

    const employeesListRender = () => {
        let thisYear: TUserApi[] = []
        let nextYear: TUserApi[] = []

        let separator: string = ''

        usersApi?.map((userApi) => {
            let [year, month, day, yearCondition, nextYearS] = DataConverter(userApi)

            if (yearCondition === 'this year') {
                thisYear.push(userApi)
            } else {
                separator = nextYearS
                nextYear.push(userApi)
            }
            return
        })

        thisYear = thisYear.toSorted(sortByBirthday)
        nextYear = nextYear.toSorted(sortByBirthday)

        const thisYearRender = EmploeeComponentRender(thisYear)

        const nextYearRender = EmploeeComponentRender(nextYear)

        let separatorUI = (<Separator year={separator} />)
console.log(thisYear, nextYear)
        return sortState === 'birthday' ? [thisYearRender, separatorUI, nextYearRender] : (
            EmploeeComponentRender(usersApi as TUserApi[])
        )
    }

    return (
        <section className={style.emploeeys_section}>
            <article className={style.emploeeys_cover}>
                {employeesListRender()}
            </article >
        </section >
    )
}