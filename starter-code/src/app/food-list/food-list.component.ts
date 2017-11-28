import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foodsList: Object[];
  showPane: boolean = false;
  newFood: Object = {};


  constructor() { }

  ngOnInit() {
    this.foodsList = foods;
    console.log(this.foodsList);
  }

  showNewFoodPane() {
    this.showPane = !this.showPane;
  }

  createNewFood() {
    foods.push(this.newFood);
    this.newFood = {};
    this.showNewFoodPane();
  }
}
