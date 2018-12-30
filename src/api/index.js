/*
包含n个接口请求函数模块
函数的返回值：promise对象
 */
import ajax from './ajax'
//根据经纬度获取位置详情
export const reqAddress = (geohash) => ajax('/position/${geohash}')
//获取食品分类列表
export const reqFoodTypes = () => ajax('/index_category')
//根据经纬度获取尚铺列表
export const reqShops = (logitude,latitude) => ajax('/shop',{logitude,latitude})
//export const  shopList = (geohash,keyword) => ajax('/search_shops',{geohash,keyword})
