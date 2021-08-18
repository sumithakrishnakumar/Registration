import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Register/register.component';
import { DropDownButtonModule } from '@syncfusion/ej2-angular-splitbuttons';
import { ToastModule } from '@syncfusion/ej2-angular-notifications';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent
    ],
  imports: [
    BrowserModule,
    DropDownButtonModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule {

}
