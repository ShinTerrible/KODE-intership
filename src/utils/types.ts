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

export type TDetailsProps = {
    onHomePage: () => void
    userData: TUserApi
}

export type TSeparatorProps = {
    year: string
}

export type TErrorProps = {
    notFound: boolean
}

export type TModalProps = {
    onSort: (e: SyntheticEvent) => void
    display: boolean,
    onClose: (e: SyntheticEvent) => void
}

export type TopAppBarProps = {
    onTabButton: (e: SyntheticEvent) => void
}
 

export type TabUpBarProps = {
    onTabButton: (e: SyntheticEvent) => void
}
