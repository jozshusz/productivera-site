import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentList: any;
  private baseUrl = "https://web3discover.com/api/";

  constructor(private http: HttpClient) { }

  getComments(ideaPostId) {
    return this.http.get(this.baseUrl + "comments/" + ideaPostId);
  }

  createNewComment(data) {
    return this.http.post(this.baseUrl + "createComment", data);
  }
  
  deleteCommentByAdmin(data){
    return this.http.post(this.baseUrl + 'deleteCommentByAdmin', data);
  }

  getCommentsByUrl(url){
    return this.http.get(url);
  }

  getFreshComments() {
    return this.http.get(this.baseUrl + "freshComments");
  }
}
