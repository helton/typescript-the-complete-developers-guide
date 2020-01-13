import axios, { AxiosPromise } from 'axios';
import { Identifiable } from './Identifiable';

export class ApiSync<T extends Identifiable> {
  private baseUrl = 'http://localhost:3000';

  constructor(private path: string) {}

  get url(): string {
    return `${this.baseUrl}/${this.path}`;
  }

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.url}/${id}`);
  }

  save(data: T): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.url}/${id}`, data);
    } else {
      return axios.post(`${this.url}`, data);
    }
  }
}
