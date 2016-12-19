import {Injectable} from '@angular/core';
import {PLAYERS_LIST} from './mock-player';

@Injectable()
export class MockPlayerService {

    getPlayerDetails() {
        return Promise.resolve(PLAYERS_LIST);
    }
}