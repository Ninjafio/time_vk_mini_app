export interface IFilm {
  id: number;
  title: string;
  descr: string;
  img: string;
  year: number;
  tags: string;
  genre: string;
  isViewed: boolean;
  lists: string;
  country: string;
  age: number;
}

export interface IList {
  id: number;
  authorId: string;
  title: string;
  descr: string;
  content: string;
}

export interface IFIlmUser {
  id: string;
  createdAt: string;
  favorite: string;
  viewed: string;
  wantToWatch: string;
}
