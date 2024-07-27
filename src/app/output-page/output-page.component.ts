import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CurrencyPipe, NgIf} from "@angular/common";

@Component({
  selector: 'app-output-page',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf
  ],
  templateUrl: './output-page.component.html',
  styleUrl: './output-page.component.css'
})
export class OutputPageComponent implements OnInit {
  data: any;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.data = navigation?.extras?.state;
  }

  ngOnInit(): void {}

  goBack(): void {
    this.router.navigate(['/input']);
  }
}
