import { inject, Injectable, signal } from '@angular/core';
import { Movie, MovieResponse } from './models/movies.interface';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  movies = signal<Movie[]>([]);
  trendingMovies = signal<Movie[]>([]);
  selectedMovie = signal<Movie | null>(null);

  currentPage = signal<number>(1);
  hasMorePages = signal<boolean>(true);
  isLoading = signal<boolean>(false);

  private readonly _apiKey = environment.apiKey;
  private readonly _apiUrl = environment.apiUrl;
  // private _searchTerm = signal<string>('');
  private readonly _http = inject(HttpClient);

  constructor() {
    this.getMovies();
    this.getTrending();
  }

  getMovieById(movieId: string): Observable<Movie> {
    // Aqui se podría crear un interceptor para insertar el apiKey en todas las peticiones
    return this._http.get<Movie>(`${this._apiUrl}/movie/${movieId}?api_key=${this._apiKey}`);
  }

  getTrending(): void {
    this._http
      .get<MovieResponse>(`${this._apiUrl}/trending/movie/day?api_key=${this._apiKey}`)
      .pipe(
        tap((movies: MovieResponse) => this.trendingMovies.set(movies.results)),
        tap(() => this.setRandomMovie()),
      )
      .subscribe();
  }

  getMovies(): void {
    this._http
      .get<MovieResponse>(`${this._apiUrl}/movie/popular?api_key=${this._apiKey}&page=${this.currentPage()}`)
      .pipe(
        tap((movies: MovieResponse) => {
          const currentMovies = this.movies();
          this.movies.set([...currentMovies, ...movies.results]);
          this.currentPage.update((page) => page + 1);
          this.hasMorePages.set(movies.total_pages > movies.page);
          this.isLoading.set(false);
        }),
      )
      .subscribe();
  }

  setRandomMovie(): void {
    const trendingLength = this.trendingMovies().length;
    const randomIndex = this._getRandomInt(0, trendingLength);
    const randomMovie = this.trendingMovies()[randomIndex];
    this.selectedMovie.set(randomMovie);
  }

  searchMovies(query: string): Observable<MovieResponse>   {
    return this._http.get<MovieResponse>(`${this._apiUrl}/search/movie?api_key=${this._apiKey}&query=${query}`);
  }

  private _getRandomInt(min = 0, max = 50): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
