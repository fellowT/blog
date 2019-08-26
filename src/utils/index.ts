/**
 * @description LocalStorage 本地存储
 * @class LocalStorage
 * @date 2019-08-26
 * @author txw
 * @exports
 */
export class LocalStorage {
  public static setItem(key: string, value: string|object ): void{
    if(typeof value === 'string'){
      localStorage.setItem(key, value)
    }
    if(typeof value === 'object'){
      localStorage.setItem(key, JSON.stringify(value))
    }
  }
  public static getItem(key: string): object|null{
    const value = localStorage.getItem(key)
    if(value === null){
      return null
    }
    return JSON.parse(value)
  }
  public static removeItem(key: string): void{
    localStorage.removeItem(key)
  }
}