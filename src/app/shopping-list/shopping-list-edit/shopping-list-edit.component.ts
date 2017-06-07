import {Component, OnInit, Output, EventEmitter, ElementRef, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {

  @ViewChild("nameInput") nameInputRef: ElementRef;
  @ViewChild("amountInput") amountInputRef: ElementRef;

  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClicked(){
    const nameValue = this.nameInputRef.nativeElement.value;
    const amountValue = this.amountInputRef.nativeElement.value;
    const ingredient = new Ingredient(nameValue, parseInt(amountValue));
    this.slService.addIngredient(ingredient);
  }

}
