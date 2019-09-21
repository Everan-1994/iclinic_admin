import axios from '@/libs/api.request'

// 查询科室列表
export const departmentList = (params) => {
    return axios.request({
        url: 'department',
        method: 'get',
        params
    })
}

// 新增科室
export const addDepartment = (data) => {
    return axios.request({
        url: 'department',
        method: 'post',
        data
    })
}

// 编辑科室
export const editDepartment = (data, id) => {
    return axios.request({
        url: 'department/' + id,
        method: 'put',
        data
    })
}

// 科室详情
export const departmentDetail = (id) => {
    return axios.request({
        url: 'department/' + id,
        method: 'get'
    })
}

// 删除科室
export const delDepartment = (data) => {
    return axios.request({
        url: 'department',
        method: 'delete',
        data
    })
}
