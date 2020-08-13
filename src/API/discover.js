import { get } from '../axios/server'

export const getPersonalized = params => get('/personalized', params) // 获取推荐歌单
export const getNewAlbum = () => get('/album/newest') // 获取新碟上架
export const getTopList = () => get('/toplist') // 获取榜单
