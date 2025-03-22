import { SyntheticEvent } from 'react'
import style from './style.module.css'



type ModalProps = {
    onSort: (e: SyntheticEvent) => void
    display: boolean,
    onClose: (e: SyntheticEvent) => void
}

export const ModalUI = ({ onSort, display, onClose }: ModalProps) => {
    return (
        <div className={style.layout} style={display ? {display: 'flex'} : {display: 'none'}}>
            <div className={style.modal_container}>
                <div className={style.header_container}>
                    <h3 className={style.header}>Сортировка</h3>
                    <button onClick={
                        onClose
                    } className={style.close_button}></button>
                </div>

                <div className={style.form}>
                    <div className={style.form_block}> <label htmlFor="alphabet" className={style.label}>По алфавиту</label>
                        <input id='alphabet' type="radio" name='sort' value='alphabet' defaultChecked className={style.radio} onClick={(e) => {onSort(e)}}/></div>
                    <div className={style.form_block}> <label htmlFor="birthday" className={style.label}>По дню рождения</label>
                        <input id='birthday' type="radio" name='sort' value='birthday' className={style.radio} onClick={(e) => {onSort(e)}} /></div>
                </div>
            </div>
        </div>
    )
}