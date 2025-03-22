import style from './style.module.css'

    type SeparatorProps = {
        year: string
    }
export const Separator = ({year}: SeparatorProps) => {
    if (year === '') {
        return
    }
    return(
        <div className={style.container}>
            <div className={style.separator_line}><hr /></div>
            <span className={style.year}>{year}</span>
            <div className={style.separator_line}><hr/></div>
        </div>
    )
}