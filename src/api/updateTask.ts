import { httpClient } from "../http/http.client"


export async function updateTask (id: number, payload: any) {
    await httpClient.patch(`/task/${id}`, payload)
}