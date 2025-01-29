import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-cards',
  imports: [CardComponent,NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})

export class CardsComponent {
data:any;

ngOnInit(): void {
  this.fetchData();
}

async fetchData():Promise<void>{
  const url = '/assets/data.json'; 
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('lassan');
    }
    this.data = (await response.json()).data.property_list
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
  
}
}