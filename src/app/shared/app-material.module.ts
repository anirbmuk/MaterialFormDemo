import { NgModule } from '@angular/core';
import { MatFormFieldModule, MatInputModule, MatDividerModule, MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule
  ]
})
export class AppMaterialModule {}
