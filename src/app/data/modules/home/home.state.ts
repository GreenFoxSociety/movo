import { Action, Selector, State, StateContext } from "@ngxs/store";
import { HOME_STATE_TOKEN, HomeStateExtras, HomeStateModel } from "./home.metadata";
import { Injectable } from "@angular/core";
import { HomeActions } from "./home.actions";
import { MovieSchema } from "../../schemas/core/movie.schema";


type CurrentCtx = StateContext<HomeStateModel>

@State({
  name: HOME_STATE_TOKEN,
  defaults: {
    movies: [],
    topMovies: [],
    popularMovies: [],
    extras: {}
  }
})
@Injectable()
export class HomeState {
  @Action(HomeActions.SetMovies)
  public setMovies(ctx: CurrentCtx, action: HomeActions.SetMovies): void {
    ctx.patchState({movies: action.movies});
  }

  @Action(HomeActions.SetPopularMovies)
  public setPopularMovies(ctx: CurrentCtx, action: HomeActions.SetPopularMovies): void {
    ctx.patchState({popularMovies: action.movies});
  }

  @Action(HomeActions.SetTopMovies)
  public setTopMovies(ctx: CurrentCtx, action: HomeActions.SetTopMovies): void {
    ctx.patchState({topMovies: action.movies});
  }

  @Action(HomeActions.SetActiveHeadImage)
  public setActiveHeadImage(ctx: CurrentCtx, action: HomeActions.SetActiveHeadImage): void {
    ctx.patchState({extras: {activeHeadImage: action.image}});
  }

  @Selector([HOME_STATE_TOKEN])
  public static selectMovies(state: HomeStateModel): MovieSchema[] {
    return state.movies;
  }

  @Selector([HOME_STATE_TOKEN])
  public static selectTopMovies(state: HomeStateModel): MovieSchema[] {
    return state.topMovies;
  }

  @Selector([HOME_STATE_TOKEN])
  public static selectPopularMovies(state: HomeStateModel): MovieSchema[] {
    return state.popularMovies;
  }

  @Selector([HOME_STATE_TOKEN])
  public static selectExtras(state: HomeStateModel): HomeStateExtras {
    return state.extras;
  }
}
