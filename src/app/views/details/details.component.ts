import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  data: any = null;

  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation()?.extras.state?.['data'];
  }

  ngOnInit() {
    this.validateData();
  }

  private validateData() {
    if (!this.data) {
      this.router.navigate(['/']);
    }
  }
}
