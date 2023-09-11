import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { APIResponse, Game } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  public sort: string = '';
  public games: Array<Game> = [];
  private routeSub: Subscription | undefined;
  private gameSub: Subscription | undefined;

  constructor(
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.routeSub = this.activatedRoute.params.subscribe((params: Params) => {
      if (params['game-search']) {
        this.searchGames('-added', params['game-search']);
      } else {
        this.searchGames('-added');
      }
    });
  }

  //search all games
  searchGames(sort: string, search?: string): void {
    this.gameSub = this.httpService
      .getGamesList(sort, search)
      .subscribe((gameList: APIResponse<Game>) => {
        this.games = gameList.results;
        console.log(gameList);
      });
  }

  //open game details page
  openGameDetails(gameId: string): void {
    //send id in the parameters of a new route
    this.router.navigate(['details', gameId]);
    
  }

  //clean up function that prevents memory leaks
  ngOnDestroy(): void {
    if (this.gameSub) {
      this.gameSub.unsubscribe();
    }
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
