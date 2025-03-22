import { TabBarUI } from './tab bar/TabBarUI'
import { SearchUI } from './search/SearchUI'
import style from './style.module.css'
import { SyntheticEvent } from 'react'

type TopAppBarProps = {
    onTabButton: (e: SyntheticEvent) => void
}

export const TopAppBarUI = ({onTabButton}: TopAppBarProps) => {
    return (
        <section className={style.top_up_bar__section}>
            <SearchUI/>
            <TabBarUI onTabButton={onTabButton} />
        </section>
    )
}