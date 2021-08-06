import angular = require('angular');
import { MoviesService } from '../../services/movies.api';
import { TheaterService } from '../../services/theater.service';

import './selection.container.scss';

interface ISelectionScope extends ng.IScope {
    theaterService: TheaterService;
  }

class SelectionController {

    _selectedTheaterFilms: Array<any>;
    cinemas: Array<any>;

   constructor(
       private theaterService: TheaterService,
       private moviesService: MoviesService,
       private $scope: ISelectionScope
    ) {
       'ngInject';

        // watching for changes on the selected theater, so we can produce correct film list
       $scope.$watch(() => this.theaterService.selectedTheater, (val) => {
            this.selectedTheaterFilms = this.moviesService.getUniqueFilmsForCinema(val.id);
        });
   }

   get selectedTheater() {
       return this.theaterService.selectedTheater;
   }

   set selectedTheaterFilms(films: Array<any>) {
       this._selectedTheaterFilms = films;
   }

   get selectedTheaterFilms() {
       return this._selectedTheaterFilms;
   }

}

export class SelectionContainer implements angular.IComponentOptions {
    static selector = 'selection';
    static controller = SelectionController;
    static bindings = {
        cinemas: '<'
    };
    static template = `
        <div class="film-list-widget d-flex flex-column pt-1 mx-auto">
            <h2 class="mx-auto text-uppercase widget-title ">Find a Movie</h2>
            <div class="theater-select">
                <h3 class="section-label text-uppercase">Select Theater</h3>
                <theater-select cinemas="$ctrl.cinemas"></theater-select>
            </div>
            <div class="my-4">
                <h3 class="section-label text-uppercase">Films playing at <strong>{{$ctrl.selectedTheater.name}}</strong></h3>
                <film-list films="$ctrl.selectedTheaterFilms"></film-list>
            </div>
        </div>
    `;
}
