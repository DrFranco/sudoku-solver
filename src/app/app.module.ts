import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleDisplayComponent } from './puzzle-display/puzzle-display.component';
import { PuzzleSolverComponent } from './puzzle-solver/puzzle-solver.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleDisplayComponent,
    PuzzleSolverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
