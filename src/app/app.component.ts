import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from "./components/container/container.component";
import { CabecalhoComponent } from "./components/cabecalho/cabecalho.component";
import { SeparadorComponent } from "./components/separador/separador.component";
import { ContatosComponent } from './components/contatos/contatos.component';

interface Contato {
  id:number
  nome:string
  telefone:string
}

import agenda from './agenda.json'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContainerComponent, CabecalhoComponent, SeparadorComponent,ContatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  alfabeto: string= 'abcdefghijklmnopqrstuvwxyz'
  contatos:Contato[] = agenda;

  filtrarContatosPorLetraInicial(letra:string):Contato[]{
    return this.contatos.filter(contato =>{
      return contato.nome.toLowerCase().startsWith(letra)
    })

  }

  ngOnInit(): void{

  }
}
