import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatFormFieldModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";

import { HousesRoutingModule } from "./houses-routing.module";
import { HousesListComponent } from "./houses-list/houses-list.component";

@NgModule({
  declarations: [HousesListComponent],
  imports: [
    CommonModule,
    HousesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ]
})
export class HousesModule {}
