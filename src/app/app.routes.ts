import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import { Articles } from './pages/articles/articles';
import { Categories } from './pages/categories/categories';
import { Entrepots } from './pages/entrepots/entrepots';
import { Historique } from './pages/historique/historique';
import { Alertes } from './pages/alertes/alertes';
import { Previsions } from './pages/previsions/previsions';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'articles', component: Articles },
  { path: 'categories', component: Categories },
  { path: 'entrepots', component: Entrepots },
  { path: 'historique', component: Historique },
  { path: 'alertes', component: Alertes },
  { path: 'previsions', component: Previsions },
  { path: '**', redirectTo: 'login' }
];