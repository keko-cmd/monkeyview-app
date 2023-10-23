import { MovieModelAPI } from "../interface/movie-model-api";

export class DAO {
    private moviesArray: MovieModelAPI[] = [];
    getMoviesList(): MovieModelAPI[] {
        return this.moviesArray;
    }
    setMovieList(movie: MovieModelAPI[]) {
        this.moviesArray = movie;
    }

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

    private movieSelected!: MovieModelAPI;
    getClickedMovie(): MovieModelAPI {
        return this.movieSelected;
    }
    setClickedMovie(movie: MovieModelAPI) {
        this.movieSelected = movie;
    }

}