import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserProfile } from './interfaces/userprofile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Mike',
    contact: 'wilsonmikedev@outlook.com',
    bio:
      '“Sometimes I’ll start a sentence, and I don’t even know where it’s going. I just hope I find it along the way.” -Michael Scott',
  };
  constructor() {}
  getUserProfile = () => {
    return this.userProfile;
  };
  setUserProfile = (form: NgForm, userProfile: UserProfile) => {
    userProfile.name = form.value.name;
    userProfile.contact = form.value.contact;
    userProfile.bio = form.value.bio;
  };
}
