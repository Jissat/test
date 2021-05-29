import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../api-service.service';
import { Shows } from './shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
  public text = '';
  public show: Shows;
  public loading = false;
  constructor(private readonly externalApi: ApiService) {}

  ngOnInit() {}

  public loadShows() {
    this.externalApi.GetShowsAPIAsync(this.text).subscribe((x) => {
      this.show = x[0];
      this.loading = false;
    });
  }

  searchShow() {
    if (this.text.length > 0) {
      this.loading = true;
      this.loadShows();
    }
  }
}
