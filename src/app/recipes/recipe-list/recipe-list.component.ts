import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.epicurious.com/photos/5c1146159ee3cf630f891235/5:4/w_3330,h_2664,c_limit/spiced-chickpeas-and-greens-frittata-recipe-BA-121218.jpg'
    ),
    new Recipe(
      'Im hungry',
      'This is simply a test',
      'https://assets.epicurious.com/photos/5c1146159ee3cf630f891235/5:4/w_3330,h_2664,c_limit/spiced-chickpeas-and-greens-frittata-recipe-BA-121218.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
