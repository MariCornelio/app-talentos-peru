import { computed, Injectable, signal } from '@angular/core';
import { JobModel } from '../../../core/models/job.model';
import { ApplicantService } from './applicant-service';
import { catchError, finalize, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApplicantStoreService {
  private _jobs = signal<JobModel[]>([]);
  private _loadingJobs = signal<boolean>(false);
  private _errorJobs = signal<string | null>(null);

  readonly jobs = computed(() => this._jobs());
  readonly loadingCourses = computed(() => this._loadingJobs());
  readonly errorCourses = computed(() => this._errorJobs());

  constructor(private applicantSvc: ApplicantService) {}

  loadAllJobs(): void {
    this._loadingJobs.set(true);
    this._errorJobs.set(null);
    this.applicantSvc
      .getJobs()
      .pipe(
        catchError((err) => {
          this._errorJobs.set('Error al cargar cursos');
          console.error('Error al cargar cursos', err);
          return of([]);
        }),
        map((jobs: JobModel[]) =>
          jobs.map((job: JobModel) => ({
            ...job,
            createdAt: new Date(job.createdAt!),
          }))
        ),
        tap((jobs: JobModel[]) => {
          this._jobs.set(jobs);
        }),
        finalize(() => {
          this._loadingJobs.set(false);
        })
      )
      .subscribe();
  }

  loadJobsIfNeeded(): void {
    if (this._jobs().length === 0 || !this._jobs()) {
      this.loadAllJobs();
    }
  }
}
