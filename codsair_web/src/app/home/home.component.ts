import { Component } from '@angular/core';
import { CommonNavbarComponent } from "../common-navbar/common-navbar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonNavbarComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
