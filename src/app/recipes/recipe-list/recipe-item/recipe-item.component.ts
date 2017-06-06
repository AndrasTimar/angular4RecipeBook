import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../../recipe.model";

@Component({
  selector: 'app-recipe-item',
  templateUrl: 'recipe-item.component.html',
  styleUrls: ['recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() currentRecipe: Recipe;

  @Output() recipeClicked = new EventEmitter<Recipe>();

  constructor() { }

  onRecipeClicked(){
    this.recipeClicked.emit(this.currentRecipe);
  }

  ngOnInit() {
  }

}
