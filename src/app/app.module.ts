import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { SedeService } from './services/sede.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SedeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
