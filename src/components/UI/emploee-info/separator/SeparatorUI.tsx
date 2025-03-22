import { TSeparatorProps } from '../../../../utils/types'
import style from './style.module.css'


export const Separator = ({ year }: TSeparatorProps) => {
    if (year === '') {
        return
    }
    
    return (
        <div className={style.container}>
            <div className={style.separator_line}><hr /></div>
            <span className={style.year}>{year}</span>
            <div className={style.separator_line}><hr /></div>
        </div>
    )
}