import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserProfile } from '../interfaces/userprofile';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  userProfile: UserProfile = null;
  constructor(private service: ProfileService, private router: Router) {}

  ngOnInit(): void {
    this.userProfile = this.service.getUserProfile();
  }
  setUserProfile = (form: NgForm): void => {
    this.service.setUserProfile(form.value);
    this.router.navigate(['/profile']);
  };
}
