import {Component} from '@angular/core';
import {RecipeModel} from "../recipe.model";

@Component({
  selector: 'app-recipe-list', templateUrl: './recipe-list.component.html', styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: RecipeModel[] = [
    new RecipeModel('Creamy Tuscan Chicken', 'The sauce is simple, but so flavorful. It\'s full of garlic, tomatoes, and most importantly, cream. It\'s bright and easy and just as good in the summer as it is in the winter. It\'s a great dinner for when you want comfort food and good enough to serve to dinner guests. We love it with bread, but you can also serve it over rice or pasta. If you love this as much as we do, try it our Tuscan Salmon next! ', 'https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpg?crop=0.668xw:1.00xh;0.160xw,0&resize=980:*'),
    new RecipeModel('Creamy Tuscan Chicken', 'The sauce is simple, but so flavorful. It\'s full of garlic, tomatoes, and most importantly, cream. It\'s bright and easy and just as good in the summer as it is in the winter. It\'s a great dinner for when you want comfort food and good enough to serve to dinner guests. We love it with bread, but you can also serve it over rice or pasta. If you love this as much as we do, try it our Tuscan Salmon next! ', 'https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpg?crop=0.668xw:1.00xh;0.160xw,0&resize=980:*'),
    new RecipeModel('Creamy Tuscan Chicken', 'The sauce is simple, but so flavorful. It\'s full of garlic, tomatoes, and most importantly, cream. It\'s bright and easy and just as good in the summer as it is in the winter. It\'s a great dinner for when you want comfort food and good enough to serve to dinner guests. We love it with bread, but you can also serve it over rice or pasta. If you love this as much as we do, try it our Tuscan Salmon next! ', 'https://hips.hearstapps.com/hmg-prod/images/20191011-creamy-tuscan-chicken-delish-ehg-2521-1571259466.jpg?crop=0.668xw:1.00xh;0.160xw,0&resize=980:*'),
  ];

}
