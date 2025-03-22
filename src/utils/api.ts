import { TUserApiData } from "./types";

const URL = 'https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?'

const options = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
};
const checkResponse = <T>(res: Response): Promise<T> => res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

// Получить всех пользователей
export const getAllUsersApi = async () => {
  return fetch(URL + "__example=all", options)
  .then((response) => checkResponse<TUserApiData>(response)).then((data) => {
    if (data) return data;
    return Promise.reject(data);
    });
}

// Получить пользователей определённого департамента
export const getDepartmentApi = (department: string) =>
  fetch(`${URL}__example=${department}`)
    .then((response) => checkResponse<TUserApiData>(response))
    .then((data) => {
      if (data) return data.items;
      return Promise.reject(data);
    });

  // Запрос, который вернёт ошибку с http кодом 500
export const getErrorCodeApi = () =>
  fetch(`${URL}__code=500&__dynamic=true`)
    .then((response) => checkResponse<TUserApiData>(response))
    .then((data) => {
      if (data) return data.items;
      return Promise.reject(data);
    });
