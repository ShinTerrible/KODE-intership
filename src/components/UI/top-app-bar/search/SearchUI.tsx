import style from './style.module.css'
import { useDispatch, useSelector } from '../../../../store/store'
import { getError, getIsLoading, userAction } from '../../../../slices/users'
import { ChangeEvent, useEffect, useState } from 'react'
import searchlight from '../../../../assets/Vector.svg'
import searchDark from '../../../../assets/search-dark.svg'
import sortDark from '../../../../assets/sort-active.svg'
import sortLight from '../../../../assets/sort.svg'


export const SearchUI = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(getIsLoading)
    const error = useSelector(getError)
    const [formBg, setFormBf] = useState('')
    const [sortSVG, setSortSVG] = useState(sortLight)
    const [BGImg, setBGImg] = useState(searchlight)

    useEffect(() => {
        if (isLoading === true) setFormBf('#6534FF') //фиолетовый
        if (isLoading === false) setFormBf('#ffffff')
        if (error === '') setFormBf('#F44336')
    }, [isLoading])

    const openSortModal = () => {
        setSortSVG(sortDark)
        dispatch(userAction.setModal(true))
    }

    const onFilter = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        let event: string = e.target.value

        dispatch(userAction.onFilter(event))
    }

    const formContentView = () => {
        if (isLoading) {
            return (<div className={style.onLoading_container}><p className={style.onLoading_info}>Секундочку, гружусь...</p></div>)
        } else if (error) {
            return (<div className={style.onLoading_container}><p className={style.onLoading_info}>Не могу обновить данные. Проверь соединение с интернетом.</p></div>)
        } else {
            return (<div className={style.label_content}>
                <img src={BGImg} id='search' className={style.search_svg} />
                <input onBlur={() => setBGImg(searchlight)} onFocus={ () => setBGImg(searchDark)} autoComplete="off" id='search_input' className={style.input} type="text" placeholder='Введи имя, тег, почту...' onChange={(e) => { onFilter(e) }} />
                <button style={{backgroundImage: `url("${sortSVG}")`}} onClick={openSortModal} className={style.sort_svg} type='button'></button>
            </div>)
        }
    }

    return (
        <form style={{ backgroundColor: `${formBg}` }} className={style.form}>
            <label className={style.label} htmlFor='search_input'> Поиск </label>
            {formContentView()}
        </form>
    )
}

