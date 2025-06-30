import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Charts } from "./charts/charts";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Charts],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'chartsapp';
}
