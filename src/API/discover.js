import { get } from '../axios/server'

export const HotPlayList = () => get('/playlist/hot')
