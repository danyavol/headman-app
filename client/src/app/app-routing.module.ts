import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/components/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/unauth.guard';
import { UnAuthLayoutComponent } from './core/components/unauth-layout/unauth-layout.component';

const routes: Routes = [
    {
        path: 'style-guide',
        loadChildren: () => import('@modules/style-guide/style-guide.module').then(m => m.StyleGuideModule)
    },
    {
        path: '',
        component: AuthLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () => import('@modules/dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
        ]
    },
    {
        path: '',
        component: UnAuthLayoutComponent,
        canActivateChild: [UnAuthGuard],
        children: [
            {
                path: 'auth',
                loadChildren: () => import('@modules/auth/auth.module').then(m => m.AuthModule)
            },
            { path: '', redirectTo: 'auth', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, UnAuthGuard],
})
export class AppRoutingModule { }
