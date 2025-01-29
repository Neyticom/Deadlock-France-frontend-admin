export enum PatchnoteStatus {
  Draft = 'Brouillon',
  Published = 'Publié',
  PendingReview = 'En attente de validation',
  Archived = 'Archivé',
}

export type Patchnote = {
  version: string;
  title: string;
  date: string;
  publishedBy: string;
  status: PatchnoteStatus;
};
