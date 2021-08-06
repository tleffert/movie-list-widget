import angular = require('angular');
import { Cinema, Market } from '../../models';

class TheaterSelectListController {
    _selectedCinema: Cinema;
    cinemas: Array<Cinema>;
    selectedCinema: ($event: { selected: Cinema}) => void;

    setSelected(selected: Cinema) {
        this._selectedCinema = selected;
        this.selectedCinema({selected: selected});
    }

    $onInit() {
        // just giving an initially selected venue
        this.setSelected(this.cinemas[0]);
    }

}

export class TheaterSelectList implements angular.IComponentOptions {
    static slector = 'theaterSelectList';
    static bindings = {
        cinemas: '<',
        selectedCinema: '&'
    };
    static controller = TheaterSelectListController;
    static template = `
        <div class="d-flex flex-row flex-wrap no-gutter">
            <div class="cinema-list col-sm-6 col-md-4 my-2" ng-repeat="cinema in $ctrl.cinemas">
                <theater-option
                    cinema="cinema"
                    selected="$ctrl._selectedCinema.id === cinema.id"
                    ng-click="$ctrl.setSelected(cinema)"
                ></theater-option>
            </div>
        </div>
    `;
}
