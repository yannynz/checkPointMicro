import { Component } from '@angular/core';

@Component({
  selector: 'app-app.component',
  standalone: true,
  imports: [],
  templateUrl: './app.component.component.html',
  styleUrl: './app.component.component.css'
})
export class AppComponentComponent {
  mensagem: string = 'Olá mundo!';
}
