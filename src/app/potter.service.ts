
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class PotterService {

  public characters: any[] = []

  public mappedCharacters: any[] =   JSON.parse(localStorage.getItem("characters")!) || []

  public movies: any[] = [
  {name: "Harry Potter and the Philosopher's Stone", img: "harry1.jfif", year: 2001},
  {name: "Harry Potter and the Chamber of Secrets", img: "harry2.jfif", year: 2002},
  {name: "Harry Potter and the Prisoner of Azkaban", img: "harry3.jfif", year: 2004},
  {name: "Harry Potter and the Goblet of Fire", img: "harry4.jfif", year: 2005},
  {name: "Harry Potter and the Order of the Phoenix", img: "harry5.jfif", year: 2007},
  {name: "Harry Potter and the Half-Blood Prince", img: "harry6.jfif", year: 2009},
  {name: "Harry Potter and the Deathly Hallows - Part 1", img: "harry7.jfif", year: 2010},
  {name: "Harry Potter and the Deathly Hallows - Part 2", img: "harry8.jfif", year: 2011}
]

  public searchedCharacter: any[] = []

  constructor(private http: HttpClient) { 
    this.http
       .get(`http://hp-api.herokuapp.com/api/characters`)
       .subscribe((resp: any) => {

        console.log(resp);
         this.characters = resp.slice(0, 25)



         this.mappedCharacters = [...this.characters].map( character  => {
           return { name: character.name , image: character.image, species: character.species, ancestry: character.ancestry? character.ancestry: "unkwown",
            hogwartsStudent: character.hogwartsStudent , hogwartsStaff: character.hogwartsStaff,  actor: character.actor 
          }
         })

         localStorage.setItem("characters", JSON.stringify(this.mappedCharacters))

        console.log("chara", this.mappedCharacters);
      });
  }



  getCharacterByName(_name: string){
    return this.mappedCharacters.find((character)=> {
      return character.name === _name
    })
  }


  searchCharacter(character: any) {
    this.searchedCharacter = [...this.mappedCharacters].filter((person) =>
      person.name.toLowerCase().includes(character.toLowerCase())
    );

  }
}
