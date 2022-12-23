import axios, { AxiosError } from 'axios'
import { useSearchParams } from 'react-router-dom'

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
    return axios.isAxiosError(error)
}

export const useQueryString = () => {
    const [searchParams] = useSearchParams()
    const searchParamsObject = Object.fromEntries([...searchParams])
    return searchParamsObject
}

export const vietnameseCurrency = (number: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number);
}