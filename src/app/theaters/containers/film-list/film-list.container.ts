import angular = require('angular');
import { TheaterService } from '../../services/theater.service';

import './film-list.container.scss';

class FilmListController {

    constructor(
        private theaterService: TheaterService,
        private $location: angular.ILocationService
    ) {
        'ngInject';
    }

    handleClick(selectedItem: any) {
        window.location.href = `https://drafthouse.com/show/${selectedItem.filmSlug}`;
    }

}

export class FilmListContainer implements angular.IComponentOptions {
    static selector = 'filmList';
    static controller = FilmListController;
    static bindings = {
        films: '<'
    };
    static template = `
        <div>
            <div class="d-flex flex-row"
                ng-repeat="filmItem in $ctrl.films"
                ng-click="$ctrl.handleClick(filmItem)"
            >
                <film-option class="w-100" film="filmItem"></film-option>
            </div>
        </div>
    `;
}
