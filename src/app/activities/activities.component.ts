import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ApiService } from '../api-service.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss'],
})
export class ActivitiesComponent implements OnInit {
  public array = [];
  constructor(private readonly externalApi: ApiService) {}

  ngOnInit() {
    this.loadManyActivities();
  }

  public loadManyActivities() {
    for (let i = 0; i < 10; i++) {
      this.loadActivities();
    }
  }

  public loadActivities() {
    this.externalApi.GetBoredAPIAsync().subscribe((x) => {
      this.array.push(x.activity);
    });
  }
}
