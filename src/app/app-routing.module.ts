import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  //{ path: "", redirectTo: "/characters", pathMatch: "full" }
  //{ path: "", redirectTo: "/houses", pathMatch: "full" }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    CommonModule
  ]
})
export class AppRoutingModule {}
