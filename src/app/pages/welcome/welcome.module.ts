import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {UploadComponent} from "../upload/upload.component";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {CommonModule} from "@angular/common";
import {NzIconModule} from "ng-zorro-antd/icon";
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTagModule } from 'ng-zorro-antd/tag';
import {FormsModule} from "@angular/forms";
import {TableComponent} from "../table/table.component";
@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzUploadModule,
    NzIconModule,
    NzTableModule,
    NzGridModule,
    NzDividerModule,
    NzSelectModule,
    NzTagModule,
    FormsModule
  ],
  declarations: [WelcomeComponent, UploadComponent, TableComponent],
  exports: [WelcomeComponent],

})
export class WelcomeModule { }
