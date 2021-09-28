import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/auth-layout/auth-layout.component';
import { AuthGuard } from './core/guards/auth.guard';

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
        path: 'style-guide',
        loadChildren: () =>
            import('@modules/style-guide/style-guide.module').then(
                (m) => m.StyleGuideModule
            )
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
