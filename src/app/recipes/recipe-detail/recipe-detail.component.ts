import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {}

  public onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
