import axios, {AxiosResponse} from "axios";
import {IUsers} from "./IUsers";
import {IPosts} from "./IPosts";

let axiosUsers = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'Content-Type':'application/json'}
})

const getAllUsers = async ():Promise<{users: IUsers[]}> => {
    return await axiosUsers.get('/users').then((response) => response.data)
}

const getUserPost = async (id:number):Promise<{posts: IPosts[]}> => {
    return await axiosUsers.get('/users/' + id + '/posts').then((response) => response.data)
}

export {getAllUsers, getUserPost}