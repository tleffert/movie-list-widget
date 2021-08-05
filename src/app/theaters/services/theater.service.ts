import { Cinema } from '../models';

export class TheaterService {
    static selector = 'theaterService';

    private _selectedTheater: Cinema;

    constructor() {
        'ngInject';
    }

    set selectedTheater(selected: Cinema) {
        this._selectedTheater = selected;
    }

    get selectedTheater() {
        return this._selectedTheater;
    }
}
