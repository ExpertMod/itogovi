import { httpClient } from "../http/http.client"

export const getFavouriteCategories = async ()=>{
    const {data} = await httpClient.get('/dashboard/pie')
    return data

}