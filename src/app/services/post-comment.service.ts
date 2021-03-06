import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  private baseUrl = "https://web3discover.com/api/";

  constructor(private http: HttpClient) { }
  
  getPostComments(postId) {
    return this.http.get(this.baseUrl + "postComments/" + postId);
  }

  createNewPostComment(data) {
    return this.http.post(this.baseUrl + "createPostComment", data);
  }

  deletePostCommentByAdmin(data){
    return this.http.post(this.baseUrl + 'deletePostCommentByAdmin', data);
  }
  
  getPostCommentsByUrl(url){
    return this.http.get(url);
  }
}
