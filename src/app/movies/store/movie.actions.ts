import { Action } from "@ngrx/store"
import { MovieDto } from "../movies.interface"

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const DELETE_FAVORITE = 'DELETE_FAVORITE';

export class AddToFavorite implements Action {
    readonly type = 'ADD_FAVORITE'

    constructor(public payload: MovieDto){}
}

export class DeleteFavorite implements Action {
    readonly type = 'DELETE_FAVORITE'
}

export type MovieListActions = AddToFavorite | DeleteFavorite