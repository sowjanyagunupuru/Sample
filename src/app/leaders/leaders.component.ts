import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-leaders',
  templateUrl: './leaders.component.html',
  styleUrls: ['./leaders.component.scss']
})
export class LeadersComponent implements OnInit {
  
  showInfo: boolean = false;//for the morebutton 
  constructor(private router: Router) { }

 
  ngOnInit() {
    
  }
  
  back(){
    this.router.navigate(['/home']);
  }

  toggleInfo() {
    this.showInfo = !this.showInfo;
  }

  toggleCloseInfo(){
    this.showInfo = !this.showInfo;
  }
}
