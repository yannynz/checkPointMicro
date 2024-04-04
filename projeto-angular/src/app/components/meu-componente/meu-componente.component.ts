import { Component, Input } from '@angular/core';
import { pessoa } from '../../../../../JSONnTS/tipos';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent {
  @Input() pessoa: pessoa;
}
