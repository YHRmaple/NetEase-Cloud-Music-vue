import { get } from '../axios/server'

export const getPersonalized = params => get('/personalized', params) // 获取推荐歌单
