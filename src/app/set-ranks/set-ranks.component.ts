import { Component } from '@angular/core';
import { PlayersService } from '../players.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'

@Component({
  selector: 'app-set-ranks',
  standalone: true,
  imports: [ MatButtonModule, MatToolbarModule, MatListModule, DragDropModule],
  templateUrl: './set-ranks.component.html',
  styleUrl: './set-ranks.component.scss'
})
export class SetRanksComponent {
  players: Array<any> = [];

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.getPlayers().subscribe((res: any) => {
      this.players = res;
      this.players.sort((a,b) => a.rank - b.rank);
    });
  }

  drop(event: CdkDragDrop<any>) {
    moveItemInArray(this.players, event.previousIndex, event.currentIndex);
    if (event.previousIndex > event.currentIndex) {
      for (let i = event.currentIndex + 1; i < event.previousIndex + 1; i++) {
        this.players[i].rank++;
      } 
    } else if (event.previousIndex < event.currentIndex) {
      for(let i = event.currentIndex - 1; i > event.previousIndex - 1; i--) {
        this.players[i].rank--;
      }
    }
    this.players[event.currentIndex].rank = event.currentIndex + 1;
  }

  saveRanks() {
    this.playersService.setRanks(this.players).subscribe()
  }
}
