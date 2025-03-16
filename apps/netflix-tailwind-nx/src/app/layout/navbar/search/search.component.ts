import { ChangeDetectionStrategy, Component, inject, linkedSignal, model } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../features/movies/movies.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Movie } from '../../../features/movies/models/movies.interface';
import { DatePipe } from '@angular/common';
import { ImageService } from '../../../shared/image.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  imports: [DatePipe, FormsModule],
  templateUrl: './search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  searchQuery = model<string>('');

  private readonly _router = inject(Router);
  private readonly _movies = inject(MoviesService);
  private readonly _imageService = inject(ImageService);

  filteredMovies = rxResource({
    request: this.searchQuery,
    //request: () => this.searchQuery(),
    loader: () => this._movies.searchMovies(this.searchQuery())
  });

  movies = linkedSignal(() => this.filteredMovies.value()?.results ?? ([] as Movie[]));
  // movies = computed(() => this.filteredMovies.value()?.results ?? ([] as Movie[]));

  getImageUrl(poster_path: string): string {
    return this._imageService.getImageUrl(poster_path);
  }

  // onSearchInput(event: Event): void {
  //   const target = event.target as HTMLInputElement;
  //   this.searchQuery.set(target.value);
  // }

  goToDetails(movieId: string): void {
    this._router.navigate(['/movies', movieId]);
    this._clearQuery();
  }

  private _clearQuery() {
    this.searchQuery.set('');
  }
}
