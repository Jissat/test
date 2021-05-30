import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../api-service.service';
import { Show } from './shows';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.scss'],
})
export class ShowsComponent implements OnInit {
  public text = '';
  public show: Show;
  public loading = false;
  public rows = 4;
  constructor(private readonly externalApi: ApiService) {}

  ngOnInit() {}

  public loadShows() {
    this.externalApi.GetShowsAPIAsync(this.text).subscribe(
      (x) => {
        this.show = x;
        this.loading = false;
      },
      () => {
        this.show = null;
        this.loading = false;
      }
    );
  }

  searchShow() {
    this.show = null;
    if (this.text.length > 0) {
      this.loading = true;
      this.loadShows();
    }
  }
}
