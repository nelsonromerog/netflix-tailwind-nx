import { Component, computed, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './layout/hero/hero.component';
import { MoviesService } from './features/movies/movies.service';
import { NavbarComponent } from './layout/navbar/navbar.component';
@Component({
  imports: [RouterOutlet, HeroComponent, NavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly _moviesService = inject(MoviesService);
  // heroMovie = this._moviesService.selectedMovie;
  heroMovie = computed(() => this._moviesService.selectedMovie());
  showButton = false;

  constructor() {
    window.addEventListener('scroll', () => {
      this.showButton = window.scrollY > 100;
    });
  }

  goTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
