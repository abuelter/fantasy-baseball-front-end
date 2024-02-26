import { Component } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-draft-board',
  standalone: true,
  imports: [],
  templateUrl: './draft-board.component.html',
  styleUrl: './draft-board.component.scss'
})
export class DraftBoardComponent {

  constructor(private playersService: PlayersService) {}

  ngOnInit() {
    this.playersService.getPlayers().subscribe(res => {
      console.log(res);
    });
  }

}
