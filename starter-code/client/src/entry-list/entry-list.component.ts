import { Component, OnInit } from '@angular/core';
import { JournalService } from 'services/journal.service';
import {Observable} from 'rxjs/Observable'
// import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journals:Array<object> = [];
  journals$: Observable<any>;

  constructor(private JournalService: JournalService) { }

  ngOnInit() {
    this.JournalService.getList().subscribe(e =>{
      this.journals = e;
      // this.journals$ = this.JournalService.getList();
    });
  }

}
