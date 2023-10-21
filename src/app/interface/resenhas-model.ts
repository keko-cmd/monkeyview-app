import { MovieModelAPI } from "./movie-model-api";

export interface ResenhasModel extends MovieModelAPI {
    comentarios: string
    email: string
    rating: number
}
