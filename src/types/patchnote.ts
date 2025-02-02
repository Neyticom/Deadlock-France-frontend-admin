export enum PatchStatus {
  Draft = 'Brouillon',
  Published = 'Publié',
  PendingReview = 'En attente de validation',
  Archived = 'Archivé'
}

export type PATCHNOTE = {
  version: string;
  title: string;
  date: string;
  publishedBy: string;
  status: PatchStatus;
};
