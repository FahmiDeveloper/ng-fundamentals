import { Route } from "@angular/compiler/src/core";
import { Routes } from "@angular/router";
import { CreateNewEventComponent } from "./create-event.component";
import { Error404Component } from "./errors/404.component";
import { EventDetailsComponent } from "./events/event-details/event-details.component";
import { EventRouteActivator } from "./events/event-details/event-route-activator.service";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes: Routes = [
    { path: 'events/new', component: CreateNewEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    { path: 'events', component: EventsListComponent},
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/events', pathMatch: 'full'}
]