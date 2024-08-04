import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ElementDialogComponent } from '../../shared/element-dialog/element-dialog.component';
import { MatDialog } from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  occupation: string;
  team: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Marcos', occupation: 'Rh', team: 'Santos' },
  { position: 2, name: 'Bruna', occupation: 'Gestor', team: 'Corinthians' },
  { position: 3, name: 'Fernando', occupation: 'Desenvolvedor Junior', team: 'Palmeiras' },
  { position: 4, name: 'Camila', occupation: 'Desenvolvedor Pleno', team: 'Sao Paulo' },
  { position: 5, name: 'Jorge', occupation: 'Desenvolvedor Senior', team: 'Fluminense' },
  { position: 6, name: 'Teresa', occupation: 'CEO', team: 'Flamengo' },
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  @ViewChild(MatTable)
  table!: MatTable<any>;
  displayedColumns: string[] = ['position', 'name', 'occupation', 'team', 'actions'];
  dataSource = ELEMENT_DATA;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(element: PeriodicElement | null): void {
    const dialogRef = this.dialog.open(ElementDialogComponent, {
      data: element === null ? {
        position: null,
        name: '',
        occupation: '',
        team: ''
      } : {
        position: element.position,
        name: element.name,
        occupation: element.occupation,
        team: element.team
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        console.log(result)
        if (this.dataSource.map(p => p.position).includes(result.position)) {
          this.dataSource[result.position - 1] = result;
          this.table.renderRows();
        } else {
          this.dataSource.push(result);
          this.table.renderRows();
        }
      }
    });
  }

  editElement(element: PeriodicElement): void {
    this.openDialog(element);
  }

  deleteElement(position: number): void {
    this.dataSource = this.dataSource.filter(p => p.position !== position);
  }
}
