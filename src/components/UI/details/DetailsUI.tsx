import style from './style.module.css'
import goose from '../../../assets/goose.svg'
import { TUserApi } from '../../../utils/types'
import { DataConverter } from '../../../utils/mock'
import { FC, memo } from 'react'

type TDetailsProps = {
    onHomePage: () => void
    userData: TUserApi
}


export const DetailsUI: FC<TDetailsProps> = memo(({userData, onHomePage}) => {
    let [year, month, day, ...data] = DataConverter(userData)
    
    const DayOfBirthday = () => {
        let birthdayDate = new Date(Date.parse(userData.birthday))
        let age_ = new Date(new Date().getTime() - birthdayDate.getTime()).getFullYear() - 1970;

        function text(age: number) {
            let txt;
            let count = age % 100;
            if (count >= 5 && count <= 20) {
                txt = 'лет';
            } else {
                count = count % 10;
                if (count == 1) {
                    txt = 'год';
                } else if (count >= 2 && count <= 4) {
                    txt = 'года';
                } else {
                    txt = 'лет';
                }
            }
            return txt;
        }

        let fullAge: string = age_ + ' ' + text(age_)
        return fullAge
    }

    const onPhoneConvert = () => {
        let phone: string
        if (userData.phone.includes('-')) {
            let p: string[]
            p = userData.phone.split('-');
            return phone = '+7 (' + p[0] + ') ' + p[1] + ' ' + p[2].slice(0, 2) + ' ' + p[2].slice(2, 4)
        } else {
            let p_ = userData.phone
            return phone = p_.slice(0, 2) + ' (' + p_.slice(2, 5) + ') ' + p_.slice(5, 8) + ' ' + p_.slice(8, 10) + ' ' + p_.slice(10, 12)
        }
    }

    return (
        <section className={style.details}>

            <nav className={style.details_nav}><button onClick={onHomePage} className={style.nav_button}></button></nav>
            <article className={style.details_container}>
                <div className={style.details_header}>
                    <div className={style.header_container}>
                        <img src={userData.avatarUrl ? userData.avatarUrl : goose} className={style.emploeeys_avatar} />
                        <div className={style.emploeeys_caption}>
                            <div className={style.emploeeys_header_caption}>
                                <h2 className={style.emploeeys_header}>{`${userData.firstName} ${userData.lastName}`}</h2>
                                <span className={style.emploeeys_tag}>{userData.userTag}</span>
                            </div>
                            <p className={style.emploeeys_position}>{userData.position}</p>

                        </div>
                    </div>
                </div>
                <div className={style.additional_info_container}>
                    <div className={style.birthday_info}>
                        <button className={style.elect_button}></button>
                        <p className={style.info}>{day} {month} {year}</p>
                        <span className={style.age}>{DayOfBirthday()}</span>
                    </div>
                    <div className={style.contact_info}>
                        <button className={style.contact_button}></button>
                        <a href={`tel:${onPhoneConvert}`} className={style.contact}>{onPhoneConvert()}</a>
                    </div>
                </div>
            </article>
        </section>) 
})









// export const DetailsUI: FC<TDetailsProps> = ({userData, onHomePage}) => {
//     let [year, month, day, ...data] = DataConverter(userData)
    
//     const DayOfBirthday = () => {
//         let birthdayDate = new Date(Date.parse(userData.birthday))
//         let age_ = new Date(new Date().getTime() - birthdayDate.getTime()).getFullYear() - 1970;
//         function text(age: number) {
//             let txt;
//             let count = age % 100;
//             if (count >= 5 && count <= 20) {
//                 txt = 'лет';
//             } else {
//                 count = count % 10;
//                 if (count == 1) {
//                     txt = 'год';
//                 } else if (count >= 2 && count <= 4) {
//                     txt = 'года';
//                 } else {
//                     txt = 'лет';
//                 }
//             }
//             return txt;
//         }

//         let fullAge: string = age_ + ' ' + text(age_)
//         return fullAge
//     }

//     const onPhoneConvert = () => {
//         let phone: string
//         if (userData.phone.includes('-')) {
//             let p: string[]
//             p = userData.phone.split('-');
//             return phone = '+7 (' + p[0] + ') ' + p[1] + ' ' + p[2].slice(0, 2) + ' ' + p[2].slice(2, 4)
//         } else {
//             let p_ = userData.phone
//             return phone = p_.slice(0, 2) + ' (' + p_.slice(2, 5) + ') ' + p_.slice(5, 8) + ' ' + p_.slice(8, 10) + ' ' + p_.slice(10, 12)
//         }
//     }

//     return (

//         <section className={style.details}>

//             <nav className={style.details_nav}><button onClick={onHomePage} className={style.nav_button}></button></nav>
//             <article className={style.details_container}>
//                 <div className={style.details_header}>
//                     <div className={style.header_container}>
//                         <img src={userData.avatarUrl ? userData.avatarUrl : goose} className={style.emploeeys_avatar} />
//                         <div className={style.emploeeys_caption}>
//                             <div className={style.emploeeys_header_caption}>
//                                 <h2 className={style.emploeeys_header}>{`${userData.firstName} ${userData.lastName}`}</h2>
//                                 <span className={style.emploeeys_tag}>{userData.userTag}</span>
//                             </div>
//                             <p className={style.emploeeys_position}>{userData.position}</p>

//                         </div>
//                     </div>
//                 </div>
//                 <div className={style.additional_info_container}>
//                     <div className={style.birthday_info}>
//                         <button className={style.elect_button}></button>
//                         <p className={style.info}>{day} {month} {year}</p>
//                         <span className={style.age}>{DayOfBirthday()}</span>
//                     </div>
//                     <div className={style.contact_info}>
//                         <button className={style.contact_button}></button>
//                         <a href={`tel:${onPhoneConvert}`} className={style.contact}>{onPhoneConvert()}</a>
//                     </div>
//                 </div>
//             </article>
//         </section>)
// }

