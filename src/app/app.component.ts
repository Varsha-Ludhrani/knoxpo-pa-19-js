import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = ["Meeting","Dinner","Exercise"];
  newItem="";
  pushItem=function() {
    if(this.newItem!="") {
    this.items.push(this.newItem);
    this.newItem="";
    }
  }

  removeItem=function(index){
    this.items.splice(index,1);
  }

}
