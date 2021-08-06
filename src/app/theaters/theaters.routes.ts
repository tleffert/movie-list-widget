import { SelectionContainer } from './containers/selection/selection.container';
import { TheaterSelectContainer } from './containers/theater-select/theater-select.container';
import { MoviesService } from './services/movies.api';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('/', {
        parent: 'app',
        url: '/austin/theaters',
        component: SelectionContainer.selector,
        // using the resolver to make sure data is hydrated
        resolve: {cinemas: [MoviesService.selector,
            (moviesService: MoviesService) => {
                return moviesService.initData().then(() => moviesService.getCinemas());
            }]
        }
    });
};
