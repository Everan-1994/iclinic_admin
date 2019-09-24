import axios from '@/libs/api.request'

// 查询医疗诊断列表
export const diagnoseList = (params) => {
    return axios.request({
        url: 'diagnose',
        method: 'get',
        params
    })
}

// 新增医疗诊断
export const addDiagnose = (data) => {
    return axios.request({
        url: 'diagnose',
        method: 'post',
        data
    })
}

// 编辑医疗诊断
export const editDiagnose = (data, id) => {
    return axios.request({
        url: 'diagnose/' + id,
        method: 'put',
        data
    })
}

// 医疗诊断详情
export const diagnoseDetail = (id) => {
    return axios.request({
        url: 'diagnose/' + id,
        method: 'get'
    })
}

// 删除医疗诊断
export const delDiagnose = (data) => {
    return axios.request({
        url: 'diagnose',
        method: 'delete',
        data
    })
}
