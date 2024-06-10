import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { CommentGuard } from './guard/comment.guard';

const routes: Routes = [
  {
    path: 'comment',
    component: CommentComponent,
  
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentRoutingModule {}
