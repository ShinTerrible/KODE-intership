import style from './style.module.css'

export const SceletonUI = () => {
    return (
        <div className={style.container}>
            <span  className={style.avatar} /> 
            <div className={style.caption}>
                    <div className={style.header}></div>
                    <div className={style.position}></div>
            </div>
        </div>
    )
}