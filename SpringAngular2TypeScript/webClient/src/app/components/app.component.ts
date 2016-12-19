import {Component, OnInit} from '@angular/core';
import {PlayerService} from './../services/player.service';
import {Player} from '../model/player';
import {HttpModule} from '@angular/http';


@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <h2>Spring + AngularJS 2 + TypeScript</h2>
      <ul>
          <li *ngFor="let player of players">
              {{player.year}} : {{player.winner}} defeated {{player.runnerUp}} {{player.score}}
         </li>
      </ul>
    `,
        providers: [HttpModule, PlayerService]
    })


export class AppComponent implements OnInit{

    constructor(private playerService : PlayerService){}

    errorMessage: string;
    players : Player[];
    public title = 'Player Results';

    getPlayers(){

        this.playerService.getPlayerDetails().subscribe(
            davis => this.players = davis,
            error =>  this.errorMessage = <any>error);
    }

    ngOnInit(){
        this.getPlayers();
    }

} // export -> create a module


