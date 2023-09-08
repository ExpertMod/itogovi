import { httpClient } from "../http/http.client"

export async function deleteCategory (id: number) {
    await httpClient.delete(`/category/${id}`)
}