import { NgModule } from '@angular/core';
import { TricityCustomLibraryComponent } from './tricity-custom-library.component';
import { TestComponent } from './test/test.component';

@NgModule({
  imports: [
  ],
  declarations: [TricityCustomLibraryComponent, TestComponent],
  exports: [TricityCustomLibraryComponent, TestComponent]
})
export class TricityCustomLibraryModule { }
