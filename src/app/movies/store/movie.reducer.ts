import { MovieDto } from '../movies.interface';
import * as MovieListActions from '../store/movie.actions';
export interface State {
  favoritemovies: MovieDto[];
  movie_id: number;
}

const initialState: State = {
  favoritemovies: [],
  movie_id: -1,
};

export function MovieReducer(
  state: State = initialState,
  action: MovieListActions.MovieListActions
) {
  switch (action.type) {
    case MovieListActions.ADD_FAVORITE:
      return {
        ...state,
        favoritemovies: [...state.favoritemovies, action.payload],
      };
    case MovieListActions.DELETE_FAVORITE:
      return {
        ...state,
        favoritemovies: state.favoritemovies.filter((fm, index) => {
          return index !== state.movie_id;
        }),
      };
    default:
      return state;
  }
}
