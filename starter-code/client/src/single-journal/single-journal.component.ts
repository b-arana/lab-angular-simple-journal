import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { JournalService } from 'services/journal.service';



@Component({
  selector: 'app-single-journal',
  templateUrl: './single-journal.component.html',
  styleUrls: ['./single-journal.component.css']
})
export class SingleJournalComponent implements OnInit {
    journal:any;

  constructor(
    route: ActivatedRoute,
    public router: Router,
    private JournalService:JournalService
  ) { 
    route.params.subscribe(params=> {
      JournalService.getJournal(params.id).subscribe(journal=>{
        this.journal = journal;
        // this.router.navigate(['/journal'], {queryParams: this, skipLocationChange: true})
      })
      
    })


  }

  ngOnInit() {
  }

}
