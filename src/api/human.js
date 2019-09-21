import axios from '@/libs/api.request'

// 查询人力资源列表
export const humanList = (params) => {
    return axios.request({
        url: 'human',
        method: 'get',
        params
    })
}

// 新增人力资源
export const addHuman = (data) => {
    return axios.request({
        url: 'human',
        method: 'post',
        data
    })
}

// 编辑人力资源
export const editHuman = (data, id) => {
    return axios.request({
        url: 'human/' + id,
        method: 'put',
        data
    })
}

// 人力资源详情
export const humanDetail = (id) => {
    return axios.request({
        url: 'human/' + id,
        method: 'get'
    })
}

// 删除人力资源
export const delHuman = (data) => {
    return axios.request({
        url: 'human',
        method: 'delete',
        data
    })
}
