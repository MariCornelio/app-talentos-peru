export interface JobModel {
  id?: string;
  image?: string;
  name?: string;
  company?: string;
  description?: string;
  location?: string;
  modality?: string;
  disability?: boolean;
  workArea?: string;
  favorite?: boolean;
  createdAt?: string | Date;
}
