import axios, { AxiosPromise } from "axios";
import { Identifiable } from "./Identifiable";
import { Settings } from "./Settings";

export class ApiSync<T extends Identifiable> {
  constructor(private path: string) {}

  get url(): string {
    return `${Settings.baseUrl}/${this.path}`;
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
