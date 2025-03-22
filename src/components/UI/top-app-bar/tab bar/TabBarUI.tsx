import { SyntheticEvent } from 'react'
import style from './style.module.css'

type TabUpBarProps = {
    onTabButton: (e: SyntheticEvent) => void
}

export const TabBarUI = ({onTabButton}: TabUpBarProps) => {
// const [activeButton, setActiveButton] = useState<boolean>(true)
    let count = 1
    const deprtments = {
        all : 'Все',
        design : 'Designers',
        management : 'Менеджмент',
        ios : 'iOS',
        android : 'Android',
        qa : 'QA',
        back_office : 'Бэк',
        frontend : 'Frontend',
        hr : 'HR',
        pr : 'PR',
        backend : 'Backend',
        support : 'Техподдержка',
        analytics : 'Аналитика'
    }

    const Tabs = () => {
        let arr = []
         for (const [key_, value] of Object.entries(deprtments)) {
            arr.push(<li key={count += 1} className={style.tabBar_list_item}><button className={style.tabBar_button} type='button' onClick={(e) => {onTabButton(e)}} value={key_}>{value}</button>i</li>)
          }
          return arr
    }

    return (
    <div className={style.tabBar_cover}>
        <ul className={style.tabBar_list}>
            {Tabs()}
        </ul>
    </div>)


}