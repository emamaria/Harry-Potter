import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  get characters(){
    return this.character.mappedCharacters

    //si quiero por buscador sustituir por  return this.character.searchedCharacter 
  }

  constructor(private character: PotterService) { }

  ngOnInit(): void {
  }



}
