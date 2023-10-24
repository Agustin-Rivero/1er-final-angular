import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon'; 



@NgModule({
  declarations: [
    IconsComponent
  ],
  imports: [
    CommonModule, MatCardModule,MatButtonModule,MatIconModule
  ],
  exports: [IconsComponent]
})
export class IconsModule { }
