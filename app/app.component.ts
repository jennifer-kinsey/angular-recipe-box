import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>My Recipes</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
       <li *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} - Rating: {{currentRecipe.rating}}</li>
     </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Tofu Recipes';
  recipes: Recipe[] = [
    new Recipe('Kung Pao Tofu', 7),
    new Recipe('Baked Tofu', 9),
    new Recipe('Stir Fried Tofu', 8)
  ];
}

export class Recipe {
  public cooked: boolean = false;
  constructor(public title: string, public rating: integer) { }
}
