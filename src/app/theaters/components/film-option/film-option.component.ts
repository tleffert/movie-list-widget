import angular = require('angular');
import { Cinema, Market } from '../../models';

import './film-option.component.scss';

class FilmOptionController {
    film: any;
    selected: boolean;
}

export class FilmOption implements angular.IComponentOptions {
    static selector = 'filmOption';
    static bindings = {
        film: '<',
        selected: '<'
    };
    static controller = FilmOptionController;
    static template = `
        <div class="btn film-option w-100 text-left d-flex flex-row" ng-class="{'selected': $ctrl.selected}">
            <div><span class="pl-2 flex-grow">{{$ctrl.film.filmName}}</span></div><div class="cart ml-auto align-middle"></div>
        </div>
    `;
}
