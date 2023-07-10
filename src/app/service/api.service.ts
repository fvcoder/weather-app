import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Search {
  status: boolean;
  query: string;
  result: Array<{
    name: string;
    country: string;
    id: number;
  }>;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  search(query: string): ReturnType<typeof this.http.get<Search>> {
    return this.http.get<Search>('/api/search', { params: { query } });
  }
}
