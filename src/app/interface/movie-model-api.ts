export interface PagesApi  {
    page: number
    results: (MovieModelAPI)[]
    total_pages: number
    total_results: number
  }
  
  export interface MovieModelAPI {

    backdrop_path: string
    id: number
    title: string
    original_title: string
    overview: string
    poster_path: string
    popularity: number
    release_date: string
  
  }
  