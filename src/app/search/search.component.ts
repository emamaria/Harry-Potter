import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PotterService } from '../potter.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild("title") title! :ElementRef<HTMLInputElement>

 

  constructor(private searchCharacter: PotterService) { }

  ngOnInit(): void {

   
    
  }


 

  search(){

    console.log(this.title.nativeElement.value);

    this.searchCharacter.searchCharacter(this.title.nativeElement.value)

   
    this.title.nativeElement.value = ""

   
    
  }

 

}
