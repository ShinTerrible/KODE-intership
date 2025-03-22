import goose from '../assets/goose.svg'
import { TUserApi } from './types';

export const user =
  [
    {
      id: "497f6eca-6276-4763-bfeb-53qweca",
      avatarUrl: goose,
      firstName: "John",
      lastName: "Doe",
      userTag: "jd",
      department: "android",
      position: "developer",
      birthday: "1973-01-24",
      phone: "+79001234567"
    },
    {
      id: "497f6eca-6276-4213-bfeb-53qweca",
      avatarUrl: goose,
      firstName: "John",
      lastName: "Doe",
      userTag: "mi",
      department: "android",
      position: "developer",
      birthday: "1973-01-24",
      phone: "+79001234567"
    }, {
      id: "497f6eca-6276-4437-bfeb-53qweca",
      avatarUrl: goose,
      firstName: "John",
      lastName: "Doe",
      userTag: "al",
      department: "android",
      position: "developer",
      birthday: "1973-01-24",
      phone: "+79001234567"
    }, {
      id: "497f6eca-6276-6893-bfeb-53qweca",
      avatarUrl: goose,
      firstName: "John",
      lastName: "Doe",
      userTag: "sm",
      department: "android",
      position: "developer",
      birthday: "1973-01-24",
      phone: "+79001234567"
    }, {
      id: "497f6eca-6276-1193-bfeb-53qweca",
      avatarUrl: goose,
      firstName: "John",
      lastName: "Doe",
      userTag: "jd",
      department: "android",
      position: "developer",
      birthday: "1973-01-24",
      phone: "+79001234567"
    },
  ]


export const department = {
  android: 'Android',
  ios: 'iOS',
  design: 'Дизайн',
  management: 'Менеджмент',
  qa: 'QA',
  back_office: 'Бэк-офис',
  frontend: 'Frontend',
  hr: 'HR',
  pr: 'PR',
  backend: 'Backend',
  support: 'Техподдержка',
  analytics: 'Аналитика',
}



export function DataConverter(userData: TUserApi): string[] {
  const month_ = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

  let date_ = userData.birthday.split('-')
  let [year, month, day] = date_
  let dayNow = new Date()
  let nextYearS: number = dayNow.getFullYear() + 1
  let yearCondition = ''
  let monthToConvert = ''

  if (month.startsWith('0')) {
    if (Number(month.slice(-1)) === 1) {
      monthToConvert = (Number(month.slice(-1))).toString()

    } else if (Number(month.slice(-1)) > 1 && Number(month.slice(-1)) <= 9) {
      monthToConvert = (Number(month.slice(-1)) - 1).toString()
    }
  } else {
    monthToConvert = (Number(month) - 1).toString()
  }
  month = month_[Number(monthToConvert)];
  if ((Number(monthToConvert) < dayNow.getMonth()) === false) {
    yearCondition = 'this year'
    if ((Number(monthToConvert) === dayNow.getMonth()) === true && (Number(day) <= dayNow.getDate()) === true) {
      yearCondition = 'this year '
    }
  } else {
    yearCondition = 'next year'
  }

    return [year, month, day, yearCondition, nextYearS.toString(), monthToConvert]
}