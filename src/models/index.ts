export interface Skill {
  name: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Post extends PostList {
  contentHtml: string;
}

export interface PostList {
  id: string;
  title?: string;
  description?: string;
  image?: string;
  sort?: number;
  type?: number; // 1:仕事 2:個人
  tags?: string[]; // タグ
}

export interface Blog extends BlogList {
  contentHtml: string;
}

export interface BlogList {
  id: string;
  title?: string;
  image?: string;
  date?: string;
  tags?: string[];
}
