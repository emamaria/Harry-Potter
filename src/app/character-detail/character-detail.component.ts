import { Component, OnInit } from '@angular/core';
import { PotterService } from '../potter.service';
import { ActivatedRoute } from '@angular/router';
import { Potter } from '../interface/potter.interface';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

   oneCharacter!: Potter 
  

  constructor(private character: PotterService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe( params => {
      console.log(params);
      const {name} = params

      console.log(name);
      

      this.oneCharacter = this.character.getCharacterByName(name)

      console.log( this.oneCharacter);
      
      
    })
  }

}
