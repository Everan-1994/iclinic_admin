import axios from '@/libs/api.request'

// 下拉选项
export const _select = (name) => {
    return axios.request({
        url: '/select?name=' + name,
        method: 'get'
    })
}