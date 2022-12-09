import { Component } from '@angular/core';
import {members} from "./members";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public readonly members = members
}
