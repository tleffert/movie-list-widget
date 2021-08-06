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

    initData() {
        return this.$http.get<any>('https://drafthouse.com/s/mother/v1/page/market/main/austin')
            .then(({data}) => {
                this.data = data.data;
            });
    }

    getCinemas() {
        return this.$http.get<any>('https://drafthouse.com/s/mother/v1/page/market/main/austin')
            .then(({data}) => {
               return data.data.market.cinemas;
            });
    }

    getSessionsForCinema(id: string) {
        return this.$http.get<any>('https://drafthouse.com/s/mother/v1/page/market/main/austin')
            .then(({data}) => {
                const sessions = data.data.sessions;
               return sessions.filter((session: any) => session.cinemaId === id);
            });
    }

    getUniqueFilmsForCinema(cinemaId: string) {
        let filmMap = new Map<string, any>();
        this.data.sessions.filter((session: any) => session.cinemaId === cinemaId)
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
