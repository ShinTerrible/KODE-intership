import goose from '../../../assets/goose.png'
import style from './style.module.css'
import { EmploeeInfoProps } from '../../../utils/types'
import { memo } from 'react'

export const EmploeeInfoUI = memo(({ avatarUrl, firstName, lastName, userTag, position, onUserDetails, id, month, day }: EmploeeInfoProps) => {

    return (
        <div className={style.emploeeys_container} onClick={(e) => { onUserDetails(e, id as string) }}>
            <img src={avatarUrl === null || avatarUrl === undefined ? goose : avatarUrl} className={style.emploeeys_avatar} />
            <div className={style.emploeeys_caption}>
                <div className={style.emploeeys_header_caption}>
                    <h3 className={style.emploeeys_header}>{`${firstName} ${lastName}`}</h3>
                    <span className={style.emploeeys_tag}>{`${userTag}`}</span>
                </div>
                <p className={style.emploeeys_position}>{`${position}`}</p>
            </div>
            <span className={style.birthday}>{day} {month?.slice(0, 3)}</span>
        </div>
    )
})