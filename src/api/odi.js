import axios from '@/libs/api.request'

// 查询机构业务发展列表
export const odiList = (params) => {
    return axios.request({
        url: 'odi',
        method: 'get',
        params
    })
}

// 新增机构业务发展
export const addOdi = (data) => {
    return axios.request({
        url: 'odi',
        method: 'post',
        data
    })
}

// 编辑机构业务发展
export const editOdi = (data, id) => {
    return axios.request({
        url: 'odi/' + id,
        method: 'put',
        data
    })
}

// 机构业务发展详情
export const odiDetail = (id) => {
    return axios.request({
        url: 'odi/' + id,
        method: 'get'
    })
}

// 删除机构业务发展
export const delOdi = (data) => {
    return axios.request({
        url: 'odi',
        method: 'delete',
        data
    })
}
