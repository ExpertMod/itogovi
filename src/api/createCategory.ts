import { httpClient } from "../http/http.client"

export interface CreateCategoryDto {
        title: string;
        category_id?: number;
}

export async function createCategory (payload: CreateCategoryDto) {
    await httpClient.post(`/category`, payload)
}