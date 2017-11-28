import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  todaysFoods : Object[] = [];
  showPane: boolean = false;
  newFood: Object = {};
  totalCalories: number = 0;
  showTodaysFood: boolean = this.todaysFoods.length !== 0;


  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
  }

  showNewFoodPane() {
    this.showPane = !this.showPane;
  }

  createNewFood() {
    foods.push(this.newFood);
    this.newFood = {};
    this.showNewFoodPane();
  }

  addThisFood(food){
    this.todaysFoods.push(food);
    this.totalCalories += food.calories;
  }

  removeThisFood(food, i) {
    this.totalCalories -= food.calories;
    this.todaysFoods.splice(i, 1);
  }
}
