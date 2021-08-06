import * as angular from 'angular';
import { FilmOption } from './components/film-option/film-option.component';
import { TheaterOption } from './components/theater-option/theater-option.component';
import { TheaterSelectList } from './components/theater-select-list/theater-select-list.component';
import { FilmListContainer } from './containers/film-list/film-list.container';
import { SelectionContainer } from './containers/selection/selection.container';


import { TheaterSelectContainer } from './containers/theater-select/theater-select.container';
import { MoviesService } from './services/movies.api';
import { TheaterService } from './services/theater.service';

import { routing } from './theaters.routes';

export const moduleName =
    angular.module('application.theaters', [
        'ui.router'
    ])

    .component(TheaterSelectContainer.selector, TheaterSelectContainer)
    .component(TheaterSelectList.slector, TheaterSelectList)
    .component(TheaterOption.selector, TheaterOption)
    .component(FilmListContainer.selector, FilmListContainer)
    .component(SelectionContainer.selector, SelectionContainer)
    .component(FilmOption.selector, FilmOption)

    .service(MoviesService.selector, MoviesService)
    .service(TheaterService.selector, TheaterService)

    .config(routing)
    .name;
