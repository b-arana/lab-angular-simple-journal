import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from 'entry-list/entry-list.component';
import { SingleJournalComponent } from 'single-journal/single-journal.component';


export const JournalRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: EntryListComponent },
  { path: 'journal/:id', component: SingleJournalComponent}
];


