import { httpClient } from "../http/http.client"

export async function deleteTask (id: number) {
    await httpClient.delete(`/task/${id}`)
}