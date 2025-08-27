import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobModel } from '../../../core/models/job.model';

@Injectable({
  providedIn: 'root',
})
export class ApplicantService {
  private apiURL = `https://talentos-peru-mock-server.onrender.com/jobs`;

  constructor(private http: HttpClient) {}

  getJobs(): Observable<JobModel[]> {
    return this.http.get<JobModel[]>(`${this.apiURL}`);
  }
}
