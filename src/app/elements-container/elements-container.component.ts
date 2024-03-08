import { Component } from '@angular/core';
import { PlayersService } from '../players.service';
import { MatGridListModule } from '@angular/material/grid-list';
import { DraftBoardComponent } from '../draft-board/draft-board.component';

@Component({
  selector: 'app-elements-container',
  standalone: true,
  imports: [MatGridListModule, DraftBoardComponent],
  templateUrl: './elements-container.component.html',
  styleUrl: './elements-container.component.scss'
})
export class ElementsContainerComponent {

  constructor(private playersService: PlayersService) {}
  players: Array<any> = [];
  positions: Array<string> = ['SP', 'RP', 'C', '1B', '2B', '3B', 'SS', 'OF']
  ngOnInit() {
    this.playersService.getPlayers().subscribe((res:any) => {
      console.log(res);
      this.players = res;
    });
  }

}
