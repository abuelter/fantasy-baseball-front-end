import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-position-list',
  standalone: true,
  imports: [ MatListModule, MatToolbarModule, MatButtonModule],
  templateUrl: './position-list.component.html',
  styleUrl: './position-list.component.scss'
})
export class PositionListComponent {
  @Input() position: string = ''
  @Input() players: Array<any> = [];
  @Input() showDrafted: boolean | undefined; 
  filteredPlayers: Array<any> = [];

  ngOnInit()  {
    if (this.position === 'C') {
      this.filteredPlayers = this.players.filter(player => player.positions.split(',').includes('C'))
    } else if (this.position === 'OF') {
      this.filteredPlayers = this.players.filter(player => player.positions.includes('RF') || player.positions.includes('CF') || player.positions.includes('LF'));
    } else {
      this.filteredPlayers = this.players.filter(player => player.positions.includes(this.position))
    }
  }

  lastOfTier(i:number) {
    let nextUndraftedPlayer;
    if (i < this.filteredPlayers.length - 1) {
      for (let j = i + 1; i<this.filteredPlayers.length; j++) {
        if(this.filteredPlayers[j] && !this.filteredPlayers[j].drafted) {
          nextUndraftedPlayer = this.filteredPlayers[j];
          break;
        }
      }
      if (nextUndraftedPlayer && nextUndraftedPlayer[this.position+'tier'] > this.filteredPlayers[i][this.position+'tier']) {
        return true;
      }
    }
    return false;
  }
}
