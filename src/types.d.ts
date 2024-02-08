export interface ApiPost {
  createdAt: string;
  description: string;
  title: string;
}

export interface ApiPosts {
  [id: string]: ApiPost;
}

export interface Post extends ApiPost {
  id: string;
}
