export const BASE_KEY = 'kiranti_admin_';

export const set = (key:string, value:any) => {
    localStorage.setItem(key, JSON.stringify(value))
}

export const get = (key:string):string => {
    return  JSON.parse(localStorage.getItem(key)|| "")
}

export const remove = (key:string) => {
    return localStorage.removeItem(key)
}


export const setToken = (token:string) => {
    set(`${BASE_KEY}token`, token)
}

export const getToken = ():string => {
    return get(`${BASE_KEY}token`)
}

export const removeToken = () => {
    return remove(`${BASE_KEY}token`)
}
