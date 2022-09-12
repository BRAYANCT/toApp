import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidateSeccionGuard } from "@core/guards/validate-seccion.guard";
const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'task',
    loadChildren: () => import('@modules/task/task.module').then((m) => m.TaskModule),
    canActivate:[ValidateSeccionGuard]
  }
  //{path:'home',component:HomeComponent},
  //{path:'one',component:HomechildoneComponent},
  //{path:'two',component:HomechildtwoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
