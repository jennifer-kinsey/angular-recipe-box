import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>My Recipes</h1>
      <h3>{{currentFocus}}</h3>
      <ul>
        <li [class]="ratingColor(currentRecipe)" *ngFor="let currentRecipe of recipes">{{currentRecipe.title}} - Rating: {{currentRecipe.rating}}
          <button class="btn btn-primary" (click)="editRecipe(currentRecipe)">Edit!</button>
        </li>
      </ul>
      <hr>
      <div>
        <div *ngIf="selectedRecipe">
          <h3>{{selectedRecipe.title}}</h3>
            <p>Have you cooked it? {{selectedRecipe.cooked}}</p>
          <h3>Edit Recipe</h3>
          <label>Enter Recipe Title:</label>
          <input [(ngModel)]="selectedRecipe.title"><br>
          <label>Enter Recipe Rating (1-10):</label><br>
          <input type="number" [(ngModel)]="selectedRecipe.rating">
          <button (click)="finishedEditing()">Done</button>
        </div>  
      </div>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Tofu Recipes';
  recipes: Recipe[] = [
    new Recipe('Kung Pao Tofu', 7),
    new Recipe('Baked Tofu', 9),
    new Recipe('Stir Fried Tofu', 8) ];
  selectedRecipe: null;

  ratingColor(currentRecipe){
    if(currentRecipe.rating < 1){
      return "bg-danger";
    }else if (currentRecipe.rating < 4){
      return "bg-warning";
    }else if (currentRecipe.rating <= 7){
      return "bg-info";
    }else if(currentRecipe.rating > 7){
      return "bg-success";
    }
  }

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}

export class Recipe {
  // public is a modifier/access-level modifier that indicates that any part of the app has permission to access this property
  public cooked: boolean = false;
  constructor(public title: string, public rating: integer) { }
}
