import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { LoaderService } from './loader/loader.service';
import { HttpService } from './http.service';

@NgModule({
  imports: [CommonModule],
  exports: [LoaderComponent],
  declarations: [LoaderComponent],
  providers: [
    LoaderService,
    HttpService,
  ],
})
export class CoreModule {}
