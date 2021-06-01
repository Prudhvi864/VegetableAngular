import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { VegetableService } from './vegetable/vegetable.service';
import { VegetableModule } from './vegetable/vegetable.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VegetableModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [VegetableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
