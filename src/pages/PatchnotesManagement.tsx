import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import React from 'react';
import PatchnotesTable from '../components/Tables/PatchnotesTable';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';

const PatchnotesManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Gestion des Patchnotes" />
      <div className="mb-4 flex justify-start">
        <button
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
                  onClick={() => console.log('Ajouter un Patchnote')}>
                    Ajouter un Patchnote
        </button>
      </div>

      <div>
        <PatchnotesTable/>
      </div>
    </>
  );
};

export default PatchnotesManagement;
