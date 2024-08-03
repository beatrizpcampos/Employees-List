import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface PeriodicElement {
  name: string;
  position: number;
  occupation: string;
  team: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Marcos', occupation: 'Rh', team: 'Santos'},
  {position: 2, name: 'Bruna', occupation: 'Gestor', team: 'Corinthians'},
  {position: 3, name: 'Fernando', occupation: 'Desenvolvedor Junior', team: 'Palmeiras'},
  {position: 4, name: 'Camila', occupation: 'Desenvolvedor Pleno', team: 'Sao Paulo'},
  {position: 5, name: 'Jorge', occupation: 'Desenvolvedor Senior', team: 'Fluminense'},
  {position: 6, name: 'Teresa', occupation: 'CEO', team: 'Flamengo'},
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  displayedColumns: string[] = ['position', 'name', 'occupation', 'team', 'actions'];
  dataSource = ELEMENT_DATA;
}
