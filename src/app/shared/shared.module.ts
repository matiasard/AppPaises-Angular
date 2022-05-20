import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
//TODO: NO OLVIDAR iMPORTAR AppRoutingModule ☝ PARA QUE FUNCIONE routerLink

import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [SidebarComponent],
})
export class SharedModule {}
