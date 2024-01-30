import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToBlog(cardName: string) {
    console.log('Clicked on card:', cardName);
    this.router.navigate(['/blog'], { queryParams: { id: cardName } });
  }
}
