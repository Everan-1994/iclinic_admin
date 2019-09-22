import axios from '@/libs/api.request'

// 查询设备列表
export const deviceList = (params) => {
    return axios.request({
        url: 'device',
        method: 'get',
        params
    })
}

// 新增设备
export const addDevice = (data) => {
    return axios.request({
        url: 'device',
        method: 'post',
        data
    })
}

// 编辑设备
export const editDevice = (data, id) => {
    return axios.request({
        url: 'device/' + id,
        method: 'put',
        data
    })
}

// 设备详情
export const deviceDetail = (id) => {
    return axios.request({
        url: 'device/' + id,
        method: 'get'
    })
}

// 删除设备
export const delDevice = (data) => {
    return axios.request({
        url: 'device',
        method: 'delete',
        data
    })
}
