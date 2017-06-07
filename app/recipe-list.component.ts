import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'recipe-list',
  template: `
  <ul>
    <li *ngFor="let currentRecipe of childRecipeList">{{currentRecipe.title}} - Rating: {{currentRecipe.rating}}
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
    </li>
  </ul>
  <h3>Here are the recipes you ain't done cooked yet:</h3>
  <ul>
    <li *ngFor="let currentRecipe of childRecipeList | completeness">{{currentRecipe.title}} - Rating: {{currentRecipe.rating}}
      <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentRecipe)">Edit!</button>
    </li>
  </ul>
  `
})

export class RecipeListComponent {
  @Input() childRecipeList: Recipe[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(recipeToEdit: Recipe) {
    this.clickSender.emit(recipeToEdit);
  }

  // ratingColor(currentRecipe){
  //   if(currentRecipe.rating < 1){
  //     return "bg-danger";
  //   }else if (currentRecipe.rating < 4){
  //     return "bg-warning";
  //   }else if (currentRecipe.rating <= 7){
  //     return "bg-info";
  //   }else if(currentRecipe.rating > 7){
  //     return "bg-success";
  //   }
  // }
}
