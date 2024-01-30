import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  private _name: string;
  private _username: string;
  private _jobTitle: string;
  private _company: string;
  private _contact: string;
  private _email: string;
  private _password: string;
  private _gender: string;
  public _consent: boolean;

  constructor() {
    this._name = '';
    this._username = '';
    this._contact = '';
    this._jobTitle = '';
    this._company = '';
    this._email = '';
    this._password = '';
    this._gender = '';
    this._consent = false;
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

   // Getter and Setter for 'jobTitle'
   get jobTitle(): string {
    return this._jobTitle;
  }

  set jobTitle(value: string) {
    this._jobTitle = value;
  }
   // Getter and Setter for 'company'
   get company(): string {
    return this._company;
  }

  set company(value: string) {
    this._company = value;
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

   // Getter and Setter for 'consent'
   get consent(): boolean {
    return this._consent;
  }

  set consent(value: boolean) {
    this._consent = value;
  }

}


