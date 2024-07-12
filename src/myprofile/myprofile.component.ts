import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyprofileService } from './myprofile.service';
import {RouterModule} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {User} from '../model/User'

@Component({
  selector: 'app-myprofile',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule],
  templateUrl: './myprofile.component.html',
  styleUrl: './myprofile.component.css'
})
export default class MyprofileComponent implements OnInit{
  user: User | undefined;

  constructor(private myprofileService: MyprofileService) { }
  profileForm!: FormGroup;

  ngOnInit(): void {
    this.getUserProfile();
    this.profileForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      citizenId: new FormControl('', [Validators.required, Validators.pattern(/^\d+$/)])
    });
  }

  getUserProfile(): void {
    this.myprofileService.getUserByEmail().subscribe(
      data => {
        this.user = data['result'];
        this.profileForm.patchValue({
          name: this.user?.firstName+" "+this.user?.lastName,
          email: this.user?.email,
          citizenId: this.user?.citizenId
        });
      },
      error => {
        console.error('Error fetching user profile:', error);
      }
    );
  }
  onSubmit() {
    console.log(this.profileForm?.value);
  }
}
