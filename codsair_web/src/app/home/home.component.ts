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


  words: string[] = ["Innovation", "Creativity", "Technology"]; 
  wordIndex: number = 0;
  charIndex: number = 0;

  ngAfterViewInit() {
    this.typingEffect();
  }

  typingEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement) {
      let currentWord = this.words[this.wordIndex];

      if (this.charIndex < currentWord.length) {
        typingElement.innerHTML += currentWord.charAt(this.charIndex);
        this.charIndex++;
        setTimeout(() => this.typingEffect(), 120);
      } else {
        // wait before erasing
        setTimeout(() => this.eraseEffect(), 1500);
      }
    }
  }

  eraseEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement) {
      if (this.charIndex > 0) {
        typingElement.innerHTML = typingElement.innerHTML.slice(0, -1);
        this.charIndex--;
        setTimeout(() => this.eraseEffect(), 80);
      } else {
        // move to next word
        this.wordIndex = (this.wordIndex + 1) % this.words.length;
        setTimeout(() => this.typingEffect(), 300);
      }
    }
  }

}
