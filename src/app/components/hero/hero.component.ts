import { Component, OnInit, AfterViewInit, isDevMode } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {

  async ngAfterViewInit() {
    // Run only in browser (fixes SSR issues)
    if (typeof window !== 'undefined' && isDevMode()) {
      const Typed = (await import('typed.js')).default;

      const options = {
        strings: ['I am a Full Stack Web Developer'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
      };

      new Typed('.auto-type', options);
    }
  }
}
