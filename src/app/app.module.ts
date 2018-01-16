import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgSpinKitModule } from 'ng-spin-kit'
// import { AngularFireModule } from 'angularfire2';
import {environment} from '../environments/environment';

import { AppComponent } from './app.component';
import { CanvasContainerComponent } from './canvas-container/canvas-container.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { DownloadButtonComponent } from './download-button/download-button.component';
import { SpinnerComponent } from './spinner/spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    CanvasContainerComponent,
    FileUploaderComponent,
    DownloadButtonComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    NgSpinKitModule,
    // AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
