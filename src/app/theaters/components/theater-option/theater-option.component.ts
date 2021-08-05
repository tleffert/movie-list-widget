import angular = require('angular');
import { Cinema, Market } from '../../models';

import './theater-option.component.scss';

class TheaterOptionController {
    cinema: Cinema;
    selected: boolean;
}

export class TheaterOption implements angular.IComponentOptions {
    static selector = 'theaterOption';
    static bindings = {
        cinema: '<',
        selected: '<'
    };
    static controller = TheaterOptionController;
    static template = `
        <button class="btn w-100 cinema-option" ng-class="{'selected': $ctrl.selected}">
            <span class="text-center text-uppercase">{{$ctrl.cinema.name}}</span>
        </button>
    `;
}
