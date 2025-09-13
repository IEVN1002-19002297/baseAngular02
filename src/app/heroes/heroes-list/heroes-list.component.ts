import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.component.html'

})
export class HeroesListComponent {

  heroes:any[]=[
    {
    "imagen":"https://dragonball-api.com/characters/goku_normal.webp",
    nombre:"Goku",
    descripcion:"Kakaroto",
    raza:"Saiyan",
    ki:91000

  },
  {
    "imagen":"https://dragonball-api.com/characters/vegeta_normal.webp",
    nombre:"Vegetta",
    descripcion:"Principe Saiyan",
    raza:"Saiyan",
    ki:90000

  },
  {
    "imagen":"https://dragonball-api.com/characters/picolo_normal.webp",
    nombre:"Piccolo",
    descripcion:"Guerrero Namekiano",
    raza:"Namekiano",
    ki:80000

  },
  {
    "imagen":"https://dragonball-api.com/characters/bulma.webp",
    nombre:"Bulma",
    descripcion:"Cientifica Empresaria",
    raza:"Humana",
    ki:2

  }
]

}
