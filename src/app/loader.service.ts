
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderVisibleSubject = new BehaviorSubject<boolean>(false);
  loaderVisible$ = this.loaderVisibleSubject.asObservable();

  private isLoaderVisible = false;

  showLoader() {
    if (!this.isLoaderVisible) {
      this.loaderVisibleSubject.next(true);
      this.isLoaderVisible = true;
    }
  }

  hideLoader() {
    this.loaderVisibleSubject.next(false);
    this.isLoaderVisible = false;
  }
}
