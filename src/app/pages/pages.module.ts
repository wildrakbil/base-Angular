import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ComponentsModule } from "../components/components.module";

import { PagesComponent } from "./pages.component";
import { HomeComponent } from "./home/home.component";

@NgModule({
  declarations: [PagesComponent, HomeComponent],
  imports: [CommonModule, ComponentsModule, RouterModule],
})
export class PagesModule {}
