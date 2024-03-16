import { Component } from '@angular/core';
import { PlayersService } from '../players.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop'
import { AddTierComponent } from '../dialog/add-tier/add-tier.component';

@Component({
  selector: 'app-set-tiers',
  standalone: true,
  imports: [DragDropModule, MatCardModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule, MatToolbarModule, MatButtonModule, MatListModule, MatDialogModule],
  templateUrl: './set-tiers.component.html',
  styleUrl: './set-tiers.component.scss'
})
export class SetTiersComponent {
  positions: Array<string> = ['SP', 'RP', 'C', '1B', '2B', '3B', 'SS', 'OF'];
  players: any;
  tieredPlayers: Array<any> = [];
  selectedPosition = new FormControl<string>('');

  constructor(private playersService: PlayersService, private dialog: MatDialog) { }

  ngOnInit() {
    this.playersService.getPlayers().subscribe((res: any) => {
      this.players = res;
    });

    this.selectedPosition.valueChanges.subscribe(val => {
      const tierValName = val + 'tier';
      const filteredPlayers = this.players.filter((player: any) => {
        if (val === 'OF') {
          return player.positions.split(',').includes('RF') || player.positions.split(',').includes('CF') || player.positions.split(',').includes('LF')
        } else {
          return player.positions.split(',').includes(val);
        }
      });
      this.tieredPlayers = filteredPlayers.reduce(
        (array: any, player: any) => {
          const tierIndex = array.findIndex((item: any) => item.tier === player[tierValName]);
          if (tierIndex === -1) {
            array.push({ tier: player[tierValName], players: [player] });
          } else {
            array[tierIndex].players.push(player);
          }
          return array;
        },
        []
      );
      this.tieredPlayers.sort((a,b) => a.tier - b.tier);
    });
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if (event.container.data.find((player: any) => player.placeholder)) {
      event.container.data.splice(event.container.data.findIndex((player: any) => player.placeholder), 1);
    }
    if (event.previousContainer.data.length === 0) {
      event.previousContainer.data.push({ name: 'Add Players', placeholder: true });
    }

  }

  addTier() {
    const tiers = this.tieredPlayers.map(tier => tier.tier);
    tiers.push(this.tieredPlayers.length);
    const dialogRef = this.dialog.open(AddTierComponent,
      {
        data: this.tieredPlayers.map(tier => tier.tier)
      });
    dialogRef.afterClosed().subscribe((tier: number) => {
      if (tier) {
        this.tieredPlayers.splice(tier - 1, 0, { tier: tier, players: [{ name: 'Add Players', placeholder: true }] });
        for (let i = tier; i < this.tieredPlayers.length; i++) {
          this.tieredPlayers[i].tier++;
        }
      }
    });
  }

  removeTier(index: number) {
    this.tieredPlayers.splice(index, 1);
  }

  saveTiers() {
    if (!this.cantSave()) {
      this.playersService.setTiers(this.tieredPlayers, this.selectedPosition.value).subscribe({
        complete: () => {
          console.log('worked')
        },
        error: () => {
          console.log('no work');
        }
      })
    }
  }

  cantSave() {
    return this.tieredPlayers.find(tier => {
      return tier.players.find((player: any) => player.placeholder)
    });
  }

}
