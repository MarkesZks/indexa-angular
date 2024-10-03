import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./components/separador/separador.component";
import { ContatosComponent } from './components/contatos/contatos.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, CabecalhoComponent, SeparadorComponent,ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto: string= 'abcdefghijklmnopqrstuvwxyz'
  
  ngOnInit(): void{

  }
}
