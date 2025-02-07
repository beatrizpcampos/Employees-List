import { ListElement } from '../../views/home/home.component';
import { Component, inject, model, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogActions, MatDialogContent, MatDialogClose,} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-element-dialog',
  standalone: true,
  templateUrl: './element-dialog.component.html',
  styleUrl: './element-dialog.component.scss',
  imports: [MatDialogActions, MatDialogContent, MatFormFieldModule, MatInputModule, MatDialogClose, NgIf, FormsModule]
})

export class ElementDialogComponent implements OnInit {
 element!: ListElement;
 isChange!: boolean;

  readonly dialogRef = inject(MatDialogRef<ElementDialogComponent>);
  readonly data = inject<ListElement>(MAT_DIALOG_DATA);

  ngOnInit(): void {
     if (this.data.position != null) {
      this.isChange = true;
     } else {
      this.isChange = false
     }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
