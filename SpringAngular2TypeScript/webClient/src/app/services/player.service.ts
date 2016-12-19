import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Player} from './../model/player';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class PlayerService {

    constructor (private http: Http) {}

    private _davisUrl = 'http://localhost:8080/result_list';  // URL to web api
    getPlayerDetails() {
        return this.http.get(this._davisUrl)
            .map(res => <Player[]> res.json())
            .catch(this.handleError);
    }
    private handleError (error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}