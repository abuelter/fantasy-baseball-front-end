import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@Component({
  selector: 'app-draft-board',
  standalone: true,
  imports: [ MatButtonModule, MatInputModule, ReactiveFormsModule ],
  templateUrl: './draft-board.component.html',
  styleUrl: './draft-board.component.scss'
})
export class DraftBoardComponent {
  @Input() players: Array<any> | undefined;
  @Input() showDrafted: boolean = false;
  @Input() statType: string = '';
  @Output() addToList = new EventEmitter<any>();

  searchVal: FormControl = new FormControl('');
  filteredPlayers: Array<any> | undefined = [];

  ngOnInit() {
    this.filteredPlayers = this.players;
    this.filteredPlayers?.sort((a, b) => a.rank - b.rank);
    this.searchVal.valueChanges.subscribe(val => {
      this.filteredPlayers = this.players?.filter(player => player.name.toLowerCase().includes(val.toLowerCase()))
    })
  }

  addToWatchList(player: any) {
    this.addToList.emit(player);
  }

  draft(player: any) {
    player.drafted = true;
  }

  undoDraft(player: any) {
    player.drafted = false;
  }
}
