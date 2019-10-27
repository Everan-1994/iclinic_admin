import axios from '@/libs/api.request'

// 下拉选项
export const _select = (name) => {
    return axios.request({
        url: '/select?name=' + name,
        method: 'get'
    })
}

export const addSelect = (data) => {
    return axios.request({
        url: '/select',
        method: 'post',
        data
    })
}

export const editSelect = (data) => {
    return axios.request({
        url: '/select',
        method: 'put',
        data
    })
}

export const delSelect = (ids, name) => {
    return axios.request({
        url: '/select?model=' + name,
        method: 'delete',
        data: {
            ids
        }
    })
}