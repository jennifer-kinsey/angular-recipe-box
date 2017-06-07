import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>My Recipes</h1>
      <h3>{{currentFocus}}</h3>
      <recipe-list [childRecipeList]="masterRecipeList" (clickSender)="editRecipe($event)"></recipe-list>
      <hr>
      <edit-recipe [childSelectedRecipe]="selectedRecipe" (doneButtonClickedSender)="finishedEditing()"></edit-recipe>
      <new-recipe (newRecipeSender)="addRecipe($event)"></new-recipe>
    </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Tofu Recipes';
  selectedRecipe: null;

  masterRecipeList: Recipe[] = [
    new Recipe('Kung Pao Tofu', 7, true),
    new Recipe('Baked Tofu', 9, false),
    new Recipe('Stir Fried Tofu', 8, true)
  ];

  editRecipe(clickedRecipe){
    this.selectedRecipe = clickedRecipe;
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }

  addRecipe(newRecipeFromChild: Recipe){
    this.masterRecipeList.push(newRecipeFromChild);
  }
}
