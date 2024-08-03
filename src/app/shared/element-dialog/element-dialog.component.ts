import {MatDialogModule} from '@angular/material/dialog';
import { PeriodicElement } from '../../views/home/home.component';
import {ChangeDetectionStrategy, Component, inject, model, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-element-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,],
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss'
})
export class ElementDialogComponent {
 element: PeriodicElement;

  readonly dialogRef = inject(MatDialogRef<ElementDialogComponent>);
  readonly data = inject<PeriodicElement>(MAT_DIALOG_DATA);
  readonly name = model(this.data.name);
  readonly occupation = model(this.data.occupation);
  readonly team = model(this.data.team);

  onCancel(): void {
    this.dialogRef.close();
  }
}
