import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { JournalService } from 'services/journal.service';
import { EntryListComponent } from '../entry-list/entry-list.component';
import { RouterModule } from '@angular/router';
import { JournalRoutes } from "../routes/Journal.routing";
import { SingleJournalComponent } from '../single-journal/single-journal.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryListComponent,
    SingleJournalComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(JournalRoutes)

  ],
  providers: [JournalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
