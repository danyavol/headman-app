import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthShellComponent } from '@modules/auth/containers/auth-shell/auth-shell.component';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';
import { UnAuthGuard } from './core/guards/unauth.guard';
import { UnAuthLayoutComponent } from './core/unauth-layout/unauth-layout.component';

const routes: Routes = [
    {
        path: '',
        component: AuthLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                loadChildren: () =>
                    import('@modules/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    )
            }
        ]
    },
    {
        path: '',
        component: UnAuthLayoutComponent,
        children: [
            {
                path: '',
                canActivate: [UnAuthGuard],
                loadChildren: () =>
                    import('@modules/auth/auth.module').then(
                        (m) => m.AuthModule
                    )
            }
        ]
    },
    {
        path: 'style-guide',
        loadChildren: () =>
            import('@modules/style-guide/style-guide.module').then(
                (m) => m.StyleGuideModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [AuthGuard, UnAuthGuard],
})
export class AppRoutingModule { }
