import { Routes } from '@angular/router';
import { Library } from '../components/library/library';
import { AddBook } from '../components/add-book/add-book';
import { About } from '../components/about/about';

export const routes: Routes = [
  { path: 'library', component: Library },
  { path: 'add-book', component: AddBook },
  { path: 'about', component: About },
  { path: '', redirectTo: 'library', pathMatch: 'full' },
];
