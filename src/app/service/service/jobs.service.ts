import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../interfaces/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private getUrl = 'http://localhost:8000/api/v1/services/';

  constructor(private http: HttpClient) { }

  getJobs() {
    return this.http.get<any[]>(this.getUrl);
  }

  getJobById(id: string): Observable<Job> {
    return this.http.get<Job>(`${this.getUrl}/${id}`);
  }

  createJob(job: Job): Observable<Job> {
    return this.http.post<Job>(this.getUrl, job);
  }

  updateJob(id: string, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.getUrl}/${id}`, job);
  }

  deleteJob(id: string): Observable<any> {
    return this.http.delete(`${this.getUrl}/${id}`);
  }
  
  searchJobs(query: string): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.getUrl}?search=${query}`);
  }

  filterJobs(
    title?: string,
    minBudget?: number,
    maxBudget?: number,
    skills?: string[],
    level?: 'entry' | 'intermediate' | 'expert',
    status?: 'pending' | 'in-progress' | 'completed' | 'canceled'
  ): Observable<Job[]> {
    let params = new HttpParams();

    if (title) {
      params = params.set('title', title);
    }
    if (minBudget !== undefined) {
      params = params.set('minBudget', minBudget.toString());
    }
    if (maxBudget !== undefined) {
      params = params.set('maxBudget', maxBudget.toString());
    }
    if (skills && skills.length > 0) {
      params = params.set('skills', skills.join(','));
    }
    if (level) {
      params = params.set('level', level);
    }
    if (status) {
      params = params.set('status', status);
    }

    return this.http.get<Job[]>(this.getUrl, { params });
  }

  
}

