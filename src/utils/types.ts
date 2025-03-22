import { SyntheticEvent } from "react";

export type TUserApi = {
    id: string,
    avatarUrl: string,
    firstName: string,
    lastName: string,
    userTag: string,
    department: string,
    position: string,
    birthday: string,
    phone: string,
    success: boolean;
}

export type TUserApiData = TServerResponse<{
    items: TUserApi[];
}>;

export type TServerResponse<T> = {
    success: boolean;
} & T;

export type TUsersState = {
    data: TUserApi[] | null,
    renderingData: TUserApi[] | null
    error: null | string | undefined;
    isLoading: boolean
    isModalOpen: false
    sortState: 'birthday' | 'alphabet'
    theme: 'light' | 'dark'

}

export type EmploeeInfoProps = Partial<TUserApi> & {
    onUserDetails: (e: SyntheticEvent, id: string) => void,
    month?: string,
    day?: string
}
