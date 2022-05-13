/* eslint-disable prettier/prettier */
export class PostModel {
  AuthorName: string;
  CreatedDate: string;
  PostHtml: string;
  PostId: string;
  UpdatedDate: string;

  public constructor(postId: string, postAuthor: string, postHtml: string, updatedDate: string, createdDate: string) {
    this.AuthorName = postId;
    this.CreatedDate = postAuthor;
    this.PostHtml = postHtml;
    this.PostId = postId;
    this.UpdatedDate = updatedDate;
  }
}
