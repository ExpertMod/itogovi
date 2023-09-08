import { httpClient } from "../http/http.client"
import { ICategory } from "../types/idnex"

export async function getCategories () : Promise<ICategory[]> {
    const {data} =
    await httpClient.get<ICategory[]>(`/category`)
    return data
}