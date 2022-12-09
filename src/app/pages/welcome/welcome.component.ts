import { Component, OnInit } from '@angular/core';
import {questions} from "../table/questions";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  public questions = questions;
  public question: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
