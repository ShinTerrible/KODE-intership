import style from './style.module.css'
import lens from '../../../assets/lens.svg'
import ufo from '../../../assets/flying-saucer_1f6f8.svg'
import { FC } from 'react'

type TErrorProps = {
    notFound: boolean
}


export const ErrorUI: FC<TErrorProps> = ({notFound}) => {
   return  !notFound ?
        <div className={style.error_container}>
            <img src={lens} alt="Изображение лупы" className={style.img} />
            <h5 className={style.title}>Мы никого не нашли</h5>
            <p className={style.info}>Попробуй скорректировать запрос</p>
        </div>
        :
        <div className={style.error_container}>
            <img src={ufo} alt="Изображение НЛО" className={style.img} />
            <h5 className={style.title}>Какой-то сверхразум все сломал</h5>
            <p className={style.info}>Постараемся быстро починить</p>
            <button onClick ={() => {window.location.reload()}} type='button' className={style.refresh}>Попробовать снова</button>
        </div>

}