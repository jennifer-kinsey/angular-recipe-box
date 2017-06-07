import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'new-recipe',
  template: `
    <h1>New Recipe</h1>
    <div>
      <label>Enter New Recipe Title:</label>
      <input #newTitle>
    </div>
    <div>
      <label> Enter Recipe Rating (1-10) </label>
      <input type="number" #newRating>
    </div>
    <div>
      <label>Have you cooked it?</label><br>
      <input type="radio" name="status" #newStatus [value]="true">I Done Cooked Eet <br>
      <input type="radio" name="status" #newStatus [value]="false">Aint cooked it yet Im gunna<br>
    </div>
    <button class="btn btn-success" (click)="submitForm(newTitle.value, newRating.value, newStatus.value); newTitle.value=''; newRating.value=''; newStatus.value='';">Add New Recipe</button>
    `
})

export class NewRecipeComponent {
  @Output() newRecipeSender = new EventEmitter();

  submitForm(title: string, rating: number, status: boolean){
    var newRecipeToAdd: Recipe = new Recipe(title, rating, status);
    this.newRecipeSender.emit(newRecipeToAdd);
  }
}
