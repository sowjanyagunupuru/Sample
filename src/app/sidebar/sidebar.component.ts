import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

interface DropdownVisibility {
  partnerEcosystem: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServiceService) { }
  isCollapsed : boolean = false;
  ngOnInit(): void {
  }

  navigateTo(option: string): void {
    this.router.navigate(['/body', option]);
    console.log(`Navigating to ${option}`);
  }
  
  showDropdown: DropdownVisibility = {
    partnerEcosystem: false
  };

  toggleDropdown(option: keyof DropdownVisibility): void {
    // Toggle the visibility of the specified dropdown
    this.showDropdown[option] = !this.showDropdown[option];
  }

  @Output() newSelectedOption = new EventEmitter<string>();//to send the option to the parent class

  selectedOption(value: string) {
    this.newSelectedOption.emit(value);
  }

  handleSideMenuClick(event: Event): void {
    // Stop the click event from propagating to the parent (col-md-3)
    event.stopPropagation();
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
     var sideElement = document.getElementById('sidebar');
     var fixSideBar = document.getElementById('sideDiv');
     var fixMainDiv = document.getElementById('mainDiv');
    if(( sideElement != undefined)&&( fixSideBar != undefined) && (fixMainDiv != undefined)){
    if(this.isCollapsed){
      sideElement.style.width = '80px';

      fixSideBar.classList.remove('col-md-2');
      fixSideBar.classList.add('col-md-1');

      fixMainDiv.classList.remove('col-md-10');
      fixMainDiv.classList.add('col-md-11');
    }else{
      sideElement.style.width = '220px';

      fixSideBar.classList.remove('col-md-1');
      fixSideBar.classList.add('col-md-2');

      fixMainDiv.classList.remove('col-md-11');
      fixMainDiv.classList.add('col-md-10');
    }
  }
  }

}
