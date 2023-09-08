import { httpClient } from "../http/http.client"

export interface CreateTaskDto {
    title: string;
    description?: string;
    category_id?: number;
}

export async function createTask (payload: CreateTaskDto) {
    await httpClient.post(`/task`, payload)
}