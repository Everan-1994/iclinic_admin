import axios from '@/libs/api.request'

// 查询门诊病历列表
export const recordList = (params) => {
    return axios.request({
        url: 'record',
        method: 'get',
        params
    })
}

// 新增门诊病历
export const addRecord = (data) => {
    return axios.request({
        url: 'record',
        method: 'post',
        data
    })
}

// 编辑门诊病历
export const editRecord = (data, id) => {
    return axios.request({
        url: 'record/' + id,
        method: 'put',
        data
    })
}

// 门诊病历详情
export const recordDetail = (id) => {
    return axios.request({
        url: 'record/' + id,
        method: 'get'
    })
}

// 删除门诊病历
export const delRecord = (data) => {
    return axios.request({
        url: 'record',
        method: 'delete',
        data
    })
}
