import { httpClient } from "../http/http.client"
import { ITask } from "../types/idnex"

export async function getTasks () : Promise<ITask[]> {
    const {data} = 
    await httpClient.get<ITask[]>(`/task`)
    return data
}