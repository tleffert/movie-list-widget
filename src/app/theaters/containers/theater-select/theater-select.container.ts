import angular = require('angular');
import { Cinema } from '../../models';
import { MoviesService } from '../../services/movies.api';
import { TheaterService } from '../../services/theater.service';
import './theater-select.container.scss';

class TheaterSelectController {

    cinemas: Array<Cinema>;

   constructor(
       private moviesService: MoviesService,
       private theaterService: TheaterService
    ) {
       'ngInject';
   }

   $onInit() {
       this.moviesService.getCinemas().then((data) => {
           this.cinemas = data as Cinema[];
       });
   }

   handleSelected(selected: Cinema) {
       this.theaterService.selectedTheater = selected;
   }
}

export class TheaterSelectContainer implements angular.IComponentOptions {
    static selector = 'theaterSelect';
    static controller = TheaterSelectController;
    static template = `
        <div>
            <theater-select-list
                cinemas="$ctrl.cinemas"
                selected-cinema="$ctrl.handleSelected(selected)"
            ></theater-select-list>
        </div>
    `;
}