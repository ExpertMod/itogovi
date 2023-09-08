import { httpClient } from "../http/http.client"


export const getTaskAnalytics = async ()=>{
     const {data} = await httpClient.get('/dashboard/tasks')
     return data
}