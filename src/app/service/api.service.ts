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

export interface State {
  status: boolean;
  query: string;
  location: {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    localtime: string;
  };
  current: {
    temp_c: number;
    is_day: number;
    condition: {
      text: string;
      icon: string;
      code: number;
    };
    wind_kph: 6.8;
    wind_degree: 250;
    humidity: 27;
    uv: 4;
  };
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  search(query: string): ReturnType<typeof this.http.get<Search>> {
    return this.http.get<Search>('/api/search', { params: { query } });
  }

  getState(zoneId: number): ReturnType<typeof this.http.get<State>> {
    return this.http.get<State>('/api/state', { params: { query: zoneId } });
  }
}
