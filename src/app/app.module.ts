import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { AppComponent } from './app.component';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { ApiService } from './api-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivitiesComponent } from './activities/activities.component';
import { ShowsComponent } from './shows/shows.component';
import { FormsModule } from '@angular/forms';

registerLocaleData(en);

const antDesignIcons = AllIcons as {
  [key: string]: IconDefinition;
};
const icons: IconDefinition[] = Object.keys(antDesignIcons).map(
  (key) => antDesignIcons[key]
);
@NgModule({
  declarations: [AppComponent, ActivitiesComponent, ShowsComponent],
  imports: [BrowserModule, NgZorroAntdModule, HttpClientModule, FormsModule],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: NZ_ICONS, useValue: icons },
    ApiService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
