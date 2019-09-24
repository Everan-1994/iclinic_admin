import axios from '@/libs/api.request'

// 查询转诊记录列表
export const referralList = (params) => {
    return axios.request({
        url: 'referral',
        method: 'get',
        params
    })
}

// 新增转诊记录
export const addReferral = (data) => {
    return axios.request({
        url: 'referral',
        method: 'post',
        data
    })
}

// 编辑转诊记录
export const editReferral = (data, id) => {
    return axios.request({
        url: 'referral/' + id,
        method: 'put',
        data
    })
}

// 转诊记录详情
export const referralDetail = (id) => {
    return axios.request({
        url: 'referral/' + id,
        method: 'get'
    })
}

// 删除转诊记录
export const delReferral = (data) => {
    return axios.request({
        url: 'referral',
        method: 'delete',
        data
    })
}
