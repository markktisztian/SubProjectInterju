import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Data } from '../data.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css'],
})
export class SubComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  name = '';
  email = '';

  ngOnInit(): void {}
  onSubmit(): void {
    const nameRegex = /^[a-zA-Z0-9\.\'\-_\s]{1,20}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!nameRegex.test(this.name)) {
      alert('Invalid Name Format');
      return;
    }
    if (!emailRegex.test(this.email)) {
      alert('Invalid E-mail format');
      return;
    }

    const data: Data = {
      name: this.name,
      email: this.email,
    };

    this.authService.sub(data).subscribe(
      (result) => {
        console.log('Data added successfully:', result);
        localStorage.setItem('currentData', this.name);
        alert('Data added successfully');
      },
      (error) => {
        console.error('Failed to add data:', error);
        alert('Failed to add data');
      }
    );
  }
  onSubmitButtonClick() {
    this.onSubmit();
  }
}
