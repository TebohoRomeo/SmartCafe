import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'invoice',
    loadChildren: () => import('./pages/invoice/invoice.module').then( m => m.InvoicePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./pages/bookings/bookings.module').then( m => m.BookingsPageModule)
  },
  {
    path: 'ticket-details',
    loadChildren: () => import('./pages/ticket-details/ticket-details.module').then( m => m.TicketDetailsPageModule)
  },
  {
    path: 'sign-document',
    loadChildren: () => import('./pages/sign-document/sign-document.module').then( m => m.SignDocumentPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'send-email',
    loadChildren: () => import('./pages/send-email/send-email.module').then( m => m.SendEmailPageModule)
  },
  {
    path: 'cv-templates',
    loadChildren: () => import('./pages/cv-templates/cv-templates.module').then( m => m.CvTemplatesPageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'write-cv-profile',
    loadChildren: () => import('./pages/write-cv-profile/write-cv-profile.module').then( m => m.WriteCvProfilePageModule)
  },
  {
    path: 'letter',
    loadChildren: () => import('./pages/letter/letter.module').then( m => m.LetterPageModule)
  },
  {
    path: 'cv-preview',
    loadChildren: () => import('./pages/cv-preview/cv-preview.module').then( m => m.CvPreviewPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
