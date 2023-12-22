import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _name: string;
  private _username: string;
  private _contact: string;
  private _email: string;
  private _password: string;
  private _gender: string;

  constructor() {
    this._name = '';
    this._username = '';
    this._contact = '';
    this._email = '';
    this._password = '';
    this._gender = '';
  }

  // Getter and Setter for 'name'
  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  // Getter and Setter for 'username'
  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  // Getter and Setter for 'contact'
  get contact(): string {
    return this._contact;
  }

  set contact(value: string) {
    this._contact = value;
  }

  // Getter and Setter for 'email'
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  // Getter and Setter for 'password'
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }

  // Getter and Setter for 'gender'
  get gender(): string {
    return this._gender;
  }

  set gender(value: string) {
    this._gender = value;
  }
}


