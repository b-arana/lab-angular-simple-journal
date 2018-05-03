import { Routes, RouterModule } from '@angular/router';
import { EntryListComponent } from 'entry-list/entry-list.component';


export const JournalRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'api/journal-entries', component: EntryListComponent },
];


