import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'edit-recipe',
  template: `
    <div>
      <div *ngIf="childSelectedRecipe">
        <h3>{{childSelectedRecipe.title}}</h3>
        <p>Cooked it before? {{childSelectedRecipe.status}}</p>
        <hr>
        <h3>Edit Recipe</h3>
        <label>Enter Recipe Title:</label>
        <input [(ngModel)]="childSelectedRecipe.title">
        <label> Enter Recipe Rating (1-10) </label>
        <input type="number" [(ngModel)]="childSelectedRecipe.rating">
        <label>Update Cooked Status</label><br>
        <input type="radio" [(ngModel)]="childSelectedRecipe.status" [value]="true">I Done Cooked Eet <br>
        <input type="radio" [(ngModel)]="childSelectedRecipe.status" [value]="false">Aint cooked it yet Im gunna<br>
        <button class="btn btn-success"(click)="doneButtonClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditRecipeComponent{
  @Input() childSelectedRecipe: Recipe;
  @Output() doneButtonClickedSender = new EventEmitter();

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
