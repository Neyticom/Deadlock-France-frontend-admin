import { USER, UserRole } from '../../types/user';
import React from 'react';

const UserData: USER[] = [
  {
    username: 'Mido',
    email: 'abc@deadlockfrance.fr',
    role: UserRole.Admin,
    signUpDate: '04/02/2003',
  },
  {
    username: 'Jex',
    email: 'abc@deadlockfrance.fr',
    role: UserRole.Admin,
    signUpDate: '23/01/2025',
  },
  {
    username: 'Romain',
    email: 'abc@deadlockfrance.fr',
    role: UserRole.Dev,
    signUpDate: '20∕01/2025',
  },
  {
    username: 'Zack',
    email: 'abc@deadlockfrance.fr',
    role: UserRole.Dev,
    signUpDate: '19/01/2025',
  },
  {
    username: 'Nils',
    email: 'abc@deadlockfrance.fr',
    role: UserRole.Dev,
    signUpDate: '18/01/2025',
  },
];

const UserTable = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5">
        <div className="p-2.5 text-center xl:p-5">
          <p className="font-medium">Utilisateur</p>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <p className="font-medium">Email</p>
        </div>
        <div className="p-2.5 text-center xl:p-5">
          <p className="font-medium">Role</p>
        </div>
        <div className="p-2.5 text-center xl:p-">
          <p className="font-medium">Date d'inscription</p>
        </div>
      </div>

      {UserData.map((user, key) => (
        <div
          className="grid grid-cols-5 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-5 md:px-6 2xl:px-7.5"
          key={key}
        >
            <div className="p-2.5 text-center xl:p-5">
              <p className="text-sm text-black dark:text-white">
                {user.username}
              </p>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <p className="text-sm text-black dark:text-white">
              {user.email}
            </p>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <p className="text-sm text-black dark:text-white">
              {user.role}
            </p>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <p className="text-sm text-black dark:text-white">
              {user.signUpDate}
            </p>
          </div>
          <div className="flex text-center justify-center p-2.5 xl:p-5">
            <button
               className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
               onClick={() => console.log(`Supprimer le patchnote ${user.username}`)}>
                    Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserTable;
