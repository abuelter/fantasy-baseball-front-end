import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-draft-board',
  standalone: true,
  imports: [ MatButtonModule ],
  templateUrl: './draft-board.component.html',
  styleUrl: './draft-board.component.scss'
})
export class DraftBoardComponent {
  @Input() players: Array<any> | undefined;
}
