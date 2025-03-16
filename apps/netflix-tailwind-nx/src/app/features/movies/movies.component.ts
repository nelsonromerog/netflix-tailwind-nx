import { Component, computed, HostListener, inject } from '@angular/core';
import { MoviesService } from './movies.service';
import { RouterLink } from '@angular/router';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieRowComponent } from './movie-row/movie-row.component';

@Component({
  selector: 'app-movies',
  imports: [RouterLink, MovieCardComponent, MovieRowComponent],
  templateUrl: './movies.component.html'
})
export class MoviesComponent {  
  isLoading = computed(() => this._moviesService.isLoading());
  hasMorePages = computed(() => this._moviesService.hasMorePages());

  private readonly _moviesService = inject(MoviesService);

  readonly movies = this._moviesService.movies;

  trendingMovies = computed(() => this._moviesService.trendingMovies());

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (this.isLoading() || !this.hasMorePages()) return;

    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollThreshold = document.documentElement.scrollHeight;

    if (scrollPosition >= scrollThreshold) {
      this._moviesService.getMovies();
    }
  }
}
