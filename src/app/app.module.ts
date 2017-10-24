import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ChartModule } from "primeng/primeng";
import 'chart.js/dist/Chart.min.js';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from "./in-memory-data-service";
import { UserService } from './user.service';
import { ItemService } from './item.service';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StatsComponent } from './stats/stats.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HistoryComponent } from './history/history.component';
import { ItemsComponent } from './items/items.component';

const appRoutes : Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'teams',
    component: TeamComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    NotFoundComponent,
    StatsComponent,
    CalendarComponent,
    HistoryComponent,
    ItemsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    InMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 600}),
    ChartModule
  ],
  providers: [UserService, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
