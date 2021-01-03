export interface Skill {
  name: string;
  star: 0 | 1 | 2 | 3 | 4 | 5;
}

export interface Post {
  id: string;
  title?: string;
  contentHtml: string;
}
