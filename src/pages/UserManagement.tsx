import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserTable from '../components/Tables/UserTable';
import React from 'react';

const UserManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Gestion des Utilisateurs" />
      <div className="mb-4 flex justify-start">
        <button
                  className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600"
                  onClick={() => console.log('Créer un utilisateur')}>
                    Ajouter un utilisateur
        </button>
      </div>
      <div>
      <UserTable/>
      </div>
    </>
  );
};

export default UserManagement;
