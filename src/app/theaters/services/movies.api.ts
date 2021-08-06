import { stringify } from '@uirouter/angularjs';
import angular = require('angular');
import { Cinema } from '../models';

export class MoviesService {
    static selector = 'moviesService';
    data: {
        market: any;
        sessions: Array<any>;
        films: Array<any>;
    };

    constructor(
        private $http: angular.IHttpService
    ) {
        'ngInject';
    }

    /**
     *
     * Fetches inital dataload for the example market
     */
    initData() {
        return this.$http.get<any>('https://drafthouse.com/s/mother/v1/page/market/main/austin')
            .then(({data}) => {
                this.data = data.data;
            });
    }

    getCinemas() {
        return this.data.market.cinemas;
    }

    /**
     *
     * @param id
     * @returns List of sessions for the provided id
     */
    getSessionsForCinema(id: string) {
        return this.data.sessions.filter((session: any) => session.cinemaId === id);
    }

    /**
     *
     * @param cinemaId
     * @returns List of Unique Films showing at provided cinema based on current sessions
     */
    getUniqueFilmsForCinema(cinemaId: string) {
        let filmMap = new Map<string, any>();
        this.getSessionsForCinema(cinemaId)
        .forEach(session => {
            const filmMapSession = filmMap.get(session.filmSlug);
            if (!filmMapSession) {
                filmMap.set(session.filmSlug, {filmName: session.filmName});
            }
        });
        let filmList = Array<any>();
        filmMap.forEach((value, key) => {
            filmList.push({filmName: value.filmName, filmSlug: key});
        });
        return filmList;
    }


}
