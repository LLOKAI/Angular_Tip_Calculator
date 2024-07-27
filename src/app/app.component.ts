import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OutputPageComponent} from "./output-page/output-page.component";
import {InputPageComponent} from "./input-page/input-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OutputPageComponent, InputPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Assignment3';
}
