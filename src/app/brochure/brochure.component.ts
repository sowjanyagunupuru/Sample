import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit(): void {  
    this.setupDownloadLinkListener();// on click on the download option this method is called
  }

    
    setupDownloadLinkListener(): void {
      const downloadLink = document.getElementById('downloadLink');
      
      if (downloadLink) {
          downloadLink.addEventListener('click', (event) => {
              event.preventDefault();
              this.authService.downloadFile().subscribe((blob: Blob) => {
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'pennApps-Host-Integrator.pdf';
                  a.click();
              });
          });
      }
  }

}



