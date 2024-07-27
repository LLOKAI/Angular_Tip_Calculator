import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.css'
})
export class InputPageComponent implements OnInit {
  tipForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.tipForm = this.fb.group({
      cost: ['', [Validators.required, Validators.min(0.01)]],
      quality: ['0.15', Validators.required],
      roundUp: [false]
    });
  }

  get cost() {
    return this.tipForm.get('cost');
  }

  onSubmit(): void {
    if (this.tipForm.valid) {
      const formValues = this.tipForm.value;
      const tip = this.calculateTip(formValues.cost, formValues.quality, formValues.roundUp);
      this.router.navigate(['/output'], {
        state: {
          ...formValues,
          tip,
          total: formValues.cost + tip
        }
      });
    }
  }

  calculateTip(cost: number, quality: number, roundUp: boolean): number {
    let tip = cost * quality;
    if (roundUp) {
      tip = Math.ceil(tip);
    } else {
      tip = Math.round(tip * 100) / 100;
    }
    return tip;
  }
}
