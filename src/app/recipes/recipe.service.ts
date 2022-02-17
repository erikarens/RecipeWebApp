import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Mein Test Rezept',
      'Test Rezepte schmecken gut!',
      'https://assets.epicurious.com/photos/5c1146159ee3cf630f891235/5:4/w_3330,h_2664,c_limit/spiced-chickpeas-and-greens-frittata-recipe-BA-121218.jpg',
      [new Ingredient('Fleisch', 1), new Ingredient('Pommes', 20)]
    ),
    new Recipe(
      'Mein Test Rezept Nummer 2',
      'Test Rezepte schmecken gut!',
      'https://assets.epicurious.com/photos/5c1146159ee3cf630f891235/5:4/w_3330,h_2664,c_limit/spiced-chickpeas-and-greens-frittata-recipe-BA-121218.jpg',
      [new Ingredient('Hackbällchen', 1), new Ingredient('Tomaten Sauce', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecepie(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
