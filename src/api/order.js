import axios from '@/libs/api.request'

// 查询门诊处方列表
export const orderList = (params) => {
    return axios.request({
        url: 'order',
        method: 'get',
        params
    })
}

// 新增门诊处方
export const addOrder = (data) => {
    return axios.request({
        url: 'order',
        method: 'post',
        data
    })
}

// 编辑门诊处方
export const editOrder = (data, id) => {
    return axios.request({
        url: 'order/' + id,
        method: 'put',
        data
    })
}

// 门诊处方详情
export const orderDetail = (id) => {
    return axios.request({
        url: 'order/' + id,
        method: 'get'
    })
}

// 删除门诊处方
export const delOrder = (data) => {
    return axios.request({
        url: 'order',
        method: 'delete',
        data
    })
}
