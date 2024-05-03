import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {}

  private url: string = "https://jsonplaceholder.typicode.com/users";
  posturl: string = "https://jsonplaceholder.typicode.com/posts"

  async getUsers(): Promise<any[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }
  async getUser(userId: number): Promise<any[]> {
    const data = await fetch(this.url + "/" + userId);
    return (await data.json()) ?? [];
  }
  async getPosts(): Promise<any[]> {
    const data = await fetch(this.posturl);
    return (await data.json()) ?? [];
  }
  async getPost(postId: number): Promise<any[]> {
    const data = await fetch(this.posturl + "/" + postId);
    return (await data.json()) ?? [];
  }
}
