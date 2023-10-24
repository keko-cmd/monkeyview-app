import { MovieModelAPI } from "../interface/movie-model-api";
import { ResenhasModel } from "../interface/resenhas-model";

export class DTO {

    //Pelicula agarrado de la API
    private moviesArray: MovieModelAPI[] = [];
    getMoviesList(): MovieModelAPI[] {
        return this.moviesArray;
    }
    setMovieList(movie: MovieModelAPI[]) {
        this.moviesArray = movie;
    }

    //Peliculas Seleccionado de API
    private movieSelectedlist: MovieModelAPI[] = [];
    getSelectedMovie(): MovieModelAPI[] {
        return this.movieSelectedlist;
    }
    setSelectedMovie(movie: MovieModelAPI[]) {
        this.movieSelectedlist = movie;
    }
    pushSelectedMovie(movie: MovieModelAPI) {
        this.movieSelectedlist.push(movie);
    }

    //Resenhas ya hechas
    private resenhasList: ResenhasModel[] = [];
    getResenhasList(): ResenhasModel[] {
        return this.resenhasList;
    }
    setResenhasList(movie: ResenhasModel[]) {
        this.resenhasList = movie;
    }
    pushResenhaMovie(movie: ResenhasModel) {
        this.resenhasList.push(movie);
    }

}