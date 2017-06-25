import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
//       ^^^^^^^^^^^^^^^^^^^^^^^
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import "@angular/animations";
import {MaterialModule} from "@angular/material";
import {AppComponent} from "./app.component";
import {NewComponentComponent} from "./new-component/new-component.component";
import "hammerjs";
@NgModule({
  declarations: [
    AppComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
//       ^^^^^^^^^^^^^^^^^^^^^^^
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],             
  bootstrap: [AppComponent]
})
export class AppModule {
}