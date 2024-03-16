import { Component, Input } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';




@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [ MatListModule, MatToolbarModule, MatButtonModule],
  templateUrl: './watch-list.component.html',
  styleUrl: './watch-list.component.scss'
})
export class WatchListComponent {
  @Input() watchList: Array<any> = [];
  @Input() showDrafted: boolean | undefined;

  removeFromList(index: number) {
    this.watchList.splice(index, 1)
  }

}
