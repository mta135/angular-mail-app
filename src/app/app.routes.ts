import { Routes } from '@angular/router';
import { SendMailComponent } from './send-mail/send-mail.component';

export const routes: Routes = [
    { path: '', component: SendMailComponent, pathMatch: 'full' },

];
