import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { PhotosModule } from './photos/photos.module';
import { AppRoutingModule } from './app.routing.module';
import { ErrorsModule } from './errors/errors.module';
import { CoreModule } from './core/core.module';
import { SpinnerLoaderModule } from 'ng-spinners';
import { LoadingModule } from './shared/components/loading/loading.module';


 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PhotosModule,
    AppRoutingModule,
    ErrorsModule,
    CoreModule,
    SpinnerLoaderModule,
    LoadingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
