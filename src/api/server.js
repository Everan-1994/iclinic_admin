import axios from '@/libs/api.request'

// 查询服务点列表
export const serverList = (params) => {
    return axios.request({
        url: 'server',
        method: 'get',
        params
    })
}

// 新增服务点
export const addServer = (data) => {
    return axios.request({
        url: 'server',
        method: 'post',
        data
    })
}

// 编辑服务点
export const editServer = (data, id) => {
    return axios.request({
        url: 'server/' + id,
        method: 'put',
        data
    })
}

// 服务点详情
export const serverDetail = (id) => {
    return axios.request({
        url: 'server/' + id,
        method: 'get'
    })
}

// 删除服务点
export const delServer = (data) => {
    return axios.request({
        url: 'server',
        method: 'delete',
        data
    })
}