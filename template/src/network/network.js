import axios from 'axios'
import { getUserToken } from '../utils/common'

axios.defaults.baseURL = 'localhost/api/v1'

export const Post = async ({ endpoint, data }) => {
    const token = await getUserToken()

    return new Promise((resolve, reject) => {
        axios
            .post(endpoint, data, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: token,
                },
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                console.log('Error', endpoint, error)
                reject(error)
            })
    })
}

export const Put = async ({ endpoint, data }) => {
    const token = await getUserToken()

    return new Promise((resolve, reject) => {
        axios
            .put(endpoint, data, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: token,
                },
            })
            .then((response) => {
                console.log(endpoint, response.data)
                resolve(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    console.log(endpoint, error.response.data)
                    console.log(endpoint, error.response.status)
                    console.log(endpoint, error.response.headers)
                }
                reject(error)
            })
    })
}

export const Delete = async ({ endpoint, data }) => {
    const token = await getUserToken()

    return new Promise((resolve, reject) => {
        axios
            .delete(endpoint, data, {
                headers: {
                    'content-type': 'application/json',
                    Authorization: token,
                },
            })
            .then((response) => {
                resolve(response.data)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

export const Get = async ({ endpoint, params }) => {
    const token = await getUserToken()

    return new Promise((resolve, reject) => {
        axios
            .get(endpoint, {
                params: params,
                headers: {
                    'content-type': 'application/json',
                    Authorization: token,
                },
            })
            .then((response) => {
                console.log(endpoint, response.data)
                resolve(response.data)
            })
            .catch((error) => {
                console.log('Error', endpoint, error)
                reject(error)
            })
    })
}
