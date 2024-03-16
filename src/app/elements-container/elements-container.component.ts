import { Component } from '@angular/core';
import { PlayersService } from '../players.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { DraftBoardComponent } from '../draft-board/draft-board.component';
import { WatchListComponent } from '../watch-list/watch-list.component';
import { PositionListComponent } from '../position-list/position-list.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router'
import { FormControl, ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-elements-container',
  standalone: true,
  imports: [MatGridListModule, DraftBoardComponent, WatchListComponent, PositionListComponent,  MatToolbarModule, MatSlideToggleModule, MatRadioModule, ReactiveFormsModule, MatIconModule, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './elements-container.component.html',
  styleUrl: './elements-container.component.scss'
})
export class ElementsContainerComponent {

  showDrafted: FormControl = new FormControl(false);
  statType: FormControl = new FormControl('Hitter');

  constructor(private playersService: PlayersService) {}
  players: Array<any> = [];
  watchList: Array<any> = [];
  positions: Array<string> = ['SP', 'RP', 'C', '1B', '2B', '3B', 'SS', 'OF']
  ngOnInit() {
    this.playersService.getPlayers().subscribe((res:any) => {
      this.players = res;
    });
  }

  addToWatchList(player: any) {
    this.watchList.push(player);
  }

}
