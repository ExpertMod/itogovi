import { httpClient } from "../http/http.client"


export async function updateCategory (payload: Partial<any>) {
    await httpClient.patch(`/category`, payload)
}