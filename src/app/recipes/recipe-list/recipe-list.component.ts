import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../recipe.model";
import {LoggerService} from "../../logger-service.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: 'recipe-list.component.html',
  styleUrls: ['recipe-list.component.css'],
  providers: [LoggerService]
})
export class RecipeListComponent implements OnInit {

  @Output() recipeClicked = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('A Test Recipe','This is a test recipe',
      'https://static.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg'),
    new Recipe('Second Test Recipe','The description of that second test recipe'
      ,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNxy8qVl0R1GoLIYf5qz87VMGVKPOwG-M1Z8y9DbyP6nFUIFB7HT7v6ECK')
  ];

  constructor(private logger: LoggerService) { }

  onRecipeClicked(recipe: Recipe){
    this.logger.log("HELLO!")
    this.recipeClicked.emit(recipe);
  }

  ngOnInit() {
  }

}
