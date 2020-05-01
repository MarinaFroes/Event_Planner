export interface SubjectInput {
  name: string;
  imageUrl?: string;
  details?: string;
}

export interface SubjectData extends SubjectInput {
  id: string;
}
