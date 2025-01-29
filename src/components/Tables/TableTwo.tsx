import { Patchnote, PatchnoteStatus } from '../../types/patchnote';


const patchnoteData: Patchnote[] = [
  {
    version: '2.23',
    title: 'Myths of thunder',
    date: '2025-28-01',
    publishedBy: 'Jex',
    status: PatchnoteStatus.Draft,
  },
  {
    version: '2.22',
    title: 'Tales of the river',
    date: '2025-21-01',
    publishedBy: 'Mido',
    status: PatchnoteStatus.PendingReview,
  },
  {
    version: '2.21',
    title: 'Mountain heroes',
    date: '2025-14-01',
    publishedBy: 'Jex',
    status: PatchnoteStatus.Published,
  },
  {
    version: '2.20',
    title: 'Punk revolution',
    date: '2025-07-01',
    publishedBy: 'Mido',
    status: PatchnoteStatus.Archived,
  },
];

const TableTwo = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      
      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5">
        <div className="flex items-center">
          <p className="font-medium">Version</p>
        </div>
        <div className="hidden items-center sm:flex">
          <p className="font-medium">Titre</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium">Date</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium">Auteur</p>
        </div>
        <div className="flex items-center">
          <p className="font-medium">Etat</p>
        </div>
      </div>

      {patchnoteData.map((patchnote, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-6 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <p className="text-sm text-black dark:text-white">
                {patchnote.version}
              </p>
            </div>
          </div>
          <div className="hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {patchnote.title}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-black dark:text-white">
              {patchnote.date}
            </p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-black dark:text-white">{patchnote.publishedBy}</p>
          </div>
          <div className="flex items-center">
            <p className="text-sm text-meta-3">{patchnote.status}</p>
          </div>
          <div className="flex items-center justify-center p-2.5 xl:p-5">
              <button className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      onClick={() => console.log(`Supprimer l'utilisateur ${user.name}`)}>
                      Supprimer
              </button>
            </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
