import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-tier',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './add-tier.component.html',
  styleUrl: './add-tier.component.scss'
})
export class AddTierComponent {
  selectedTier: number | null = null;

  constructor(@Inject(MAT_DIALOG_DATA) public tiers: Array<number>, private dialogRef: MatDialogRef<AddTierComponent>) {}

  cancel() {
    this.dialogRef.close();
  }

  addTier() {
    this.dialogRef.close(this.selectedTier);
  }
}
