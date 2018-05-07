import { Component } from '@angular/core';
import { UserService } from './user-service/user.service';
@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <table class="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>State</th>
        <th>Comp</th>
      </tr>
    </thead>
    <tbody>
    <tr *ngFor="let u of user" >
      <td>{{u.firstName}}</td>
      <td>{{u.email}}</td>
      <td>
      <!--  <ul [ngSwitch]="u.address.state">
          <li *ngSwitchCase="TN">Tennesse</li>
          <li *ngSwitchDefault>Other</li>
        </ul>
        -->
        <p *ngIf="(u.address.state==='OR'); then orlando else other">
        </p>
          <ng-template #orlando>{{u.address.state}}</ng-template>
          <ng-template #other>Other{{u.address.state}}</ng-template>
      </td>
      <td>{{u.company.name}}</td>
    </tr>
    </tbody>
  </table>
  `
})
export class AppComponent {
  user;
  constructor(userService: UserService) {
    this.user = userService.getUsers();
  }
}

