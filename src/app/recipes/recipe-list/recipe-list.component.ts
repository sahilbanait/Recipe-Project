import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe('brownie','This is a test','https://www.seriouseats.com/thmb/9GYEd9f4O2W3OMWsXcfoWsAG9Fc=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__03__20180413-brownie-mix-vicky-wasik-20-585247e1dd334df9849799ad76f29fa7.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
