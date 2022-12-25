import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import {NgxElectronModule} from 'ngx-electron';
import {AppRoutingModule} from './app-routing.module';

// [...]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // NgxElectronModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
