import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { ModalContentComponent } from './modal/modal-content/modalContent.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
  ],
  exports: [
    DashboardComponent,
  ],
  providers: [

  ],
  entryComponents: [
    ModalContentComponent,
  ],
  declarations: [
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ModalContentComponent,
  ],
})
export class DashboardModule {
}
