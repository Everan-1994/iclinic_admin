import axios from '@/libs/api.request'

// 查询机构列表
export const organizationList = (params) => {
    return axios.request({
        url: 'organization',
        method: 'get',
        params
    })
}

// 新增机构
export const addOrganization = (data) => {
    return axios.request({
        url: 'organization',
        method: 'post',
        data
    })
}

// 编辑机构
export const editOrganization = (data, id) => {
    return axios.request({
        url: 'organization/' + id,
        method: 'put',
        data
    })
}

// 机构详情
export const organizationDetail = (id) => {
    return axios.request({
        url: 'organization/' + id,
        method: 'get'
    })
}

// 删除机构
export const delOrganization = (data) => {
    return axios.request({
        url: 'organization',
        method: 'delete',
        data
    })
}