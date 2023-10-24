import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button'; 
import { IconsModule } from './modules/icons/icons.module';
import { MatIconModule } from '@angular/material/icon';
import { FormulariosComponent } from './modules/formularios/formularios.component';
import { FormulariosModule } from './modules/formularios/formularios.module';



@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,MatSidenavModule,MatCardModule,MatButtonModule,IconsModule,MatIconModule,FormulariosModule
  ],
  exports: [ DashboardComponent, ],
})
export class DashboardModule { }
