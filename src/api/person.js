import axios from '@/libs/api.request'

// 查询个人信息列表
export const personList = (params) => {
    return axios.request({
        url: 'person',
        method: 'get',
        params
    })
}

// 新增个人信息
export const addPerson = (data) => {
    return axios.request({
        url: 'person',
        method: 'post',
        data
    })
}

// 编辑个人信息
export const editPerson = (data, id) => {
    return axios.request({
        url: 'person/' + id,
        method: 'put',
        data
    })
}

// 个人信息详情
export const personDetail = (id) => {
    return axios.request({
        url: 'person/' + id,
        method: 'get'
    })
}

// 删除个人信息
export const delPerson = (data) => {
    return axios.request({
        url: 'person',
        method: 'delete',
        data
    })
}