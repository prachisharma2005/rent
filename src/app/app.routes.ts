import { Routes } from '@angular/router';
import { FindpropertiesComponent } from './findproperties/findproperties.component';
import { PropertyComponent } from './property/property.component';
import { CardsComponent } from './cards/cards.component';

export const routes: Routes = [
  { path: 'find-properties', component: CardsComponent },
  { path: '', component: CardsComponent },

  {
    path: 'find-property/gb-london/:propertyId',
    component: PropertyComponent,
  },
];
