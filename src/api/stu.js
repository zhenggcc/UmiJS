import { request } from 'umi'

export const stuGet = ()=>{
    return request('/classes/stu', {
        method: 'GET',
    })
}

export const stuDelete = (id)=>{ //删除
    return request(`classes/stu?id=${id}`, {
        method: 'DELETE',
    })
}