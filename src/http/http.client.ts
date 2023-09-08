import axios from "axios";
export const httpClient = axios.create({
    baseURL: 'http://productivity-app-back-end-2-cb283313507b.herokuapp.com',
    headers: {'defaultAuth' : 'hv0AdLACyG'}
  });