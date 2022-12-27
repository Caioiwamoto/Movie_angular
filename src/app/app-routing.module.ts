import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'movies',
    loadChildren: () => import('./components/movies/movies.module').then(mod => mod.MoviesModule)
  },

  {
    path: 'movies/:id', loadChildren: () => import('./components/movie-details/movie-details.module').then(mod => mod.MovieDetailsModule)
  },

  {
    path: 'tv',
    loadChildren: () => import('./components/tv-shows/tv-shows.module').then(mod => mod.TvShowsModule)
  },

  {
    path: 'tv/:id',
    loadChildren: () => import('./components/tv-show-details/tv-show-details.module').then(mod => mod.TvShowDetailsModule)
  },

  {
    path: 'person/:id',
    loadChildren: () => import('./components/person/person.module').then(mod => mod.PersonModule)
  },

  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
