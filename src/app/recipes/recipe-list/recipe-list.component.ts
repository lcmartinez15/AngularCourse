import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('a test', 'this is a simpli recipe', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/09/Christmas-pudding-1842-x-1212.jpg'),
    new Recipe('a test', 'this is a simpli recipe', 'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/63/2019/09/Christmas-pudding-1842-x-1212.jpg') ];
  constructor() { }

  ngOnInit(): void {
  }

}
