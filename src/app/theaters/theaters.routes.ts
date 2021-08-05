import { SelectionContainer } from './containers/selection/selection.container';
import { TheaterSelectContainer } from './containers/theater-select/theater-select.container';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider
    .state('/', {
        parent: 'app',
        url: '/theaters',
        component: SelectionContainer.selector
    });
};
