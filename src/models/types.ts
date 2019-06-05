export interface Album {
  createdAt: string;
  id: string;
  title: string;
  tags?: string[];
}

export interface Photo {
  createdAt: string;
  id: string;
  src: string;
  title: string;
  tags?: string[];
}
