import { PATCHNOTE, PatchStatus } from '../../types/patchnote';
import React from 'react';
const patchnoteData: PATCHNOTE[] = [
  {
    version: '2.23',
    title: 'Myths of thunder',
    date: '28/01/2025',
    publishedBy: 'Jex',
    status: PatchStatus.Draft,
  },
  {
    version: '2.22',
    title: 'Tales of the river',
    date: '21/01/2025',
    publishedBy: 'Mido',
    status: PatchStatus.PendingReview,
  },
  {
    version: '2.21',
    title: 'Mountain heroes',
    date: '14/01/2025',
    publishedBy: 'Jex',
    status: PatchStatus.Published,
  },
  {
    version: '2.20',
    title: 'Punk revolution',
    date: '07/01/2025',
    publishedBy: 'Mido',
    status: PatchStatus.Published,
  },
  {
    version: '2.19',
    title: 'Knights & Mages',
    date: '31/12/2024',
    publishedBy: 'Jex',
    status: PatchStatus.Archived,
  },
];

const PatchnotesTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <div className="grid grid-cols-6 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-6">
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-center text-sm font-medium uppercase xsm:text-base">
              Version
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Titre
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Publié par
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Status
            </h5>
          </div>
        </div>

        {patchnoteData.map((patchnote, key) => (
          <div
            className={`grid grid-cols-6 sm:grid-cols-6 ${
              key === patchnoteData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}>
            <div className="text-center p-2.5 xl:p-5">
              <p>{patchnote.version}</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{patchnote.title}</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{patchnote.date}</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
              <p className="text-meta-3">{patchnote.publishedBy}</p>
            </div>

            <div className="p-2.5 text-center xl:p-5">
              <p className="text-black dark:text-white">{patchnote.status}</p>
            </div>
            <div className="flex items-center justify-center p-2.5 xl:p-5">
      <button
        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => console.log(`Supprimer le patchnote ${patchnote.version}`)}
      >
        Supprimer
      </button>
    </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatchnotesTable;
