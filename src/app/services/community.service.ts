import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  private baseUrl = "https://web3discover.com/api/";

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(this.baseUrl + "communityPosts");
  }

  createNewPost(data) {
    return this.http.post(this.baseUrl + "createPost", data);
  }
  
  deleteUserPostByAdmin(data) {
    return this.http.post(this.baseUrl + "deleteUserPostByAdmin", data);
  }
  
  getPostsByUrl(url){
    return this.http.get(url);
  }
}
