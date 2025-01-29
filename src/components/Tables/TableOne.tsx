import { USER } from '../../types/user';


const userData: USER[] = [
  {
    name: 'Mido',
    email: 'abc@deadlockfrance.fr',
    role: 'Admin',
    date: '2003-02-04',
  },
  {
    name: 'Jex',
    email: 'abc@deadlockfrance.fr',
    role: 'Admin',
    date: '2025-01-23',
  },
  {
    name: 'Romain',
    email: 'abc@deadlockfrance.fr',
    role: 'Dev',
    date: '2025-01-20',
  },
  {
    name: 'Zack',
    email: 'abc@deadlockfrance.fr',
    role: 'Dev',
    date: '2025-01-19',
  },
  {
    name: 'Nils',
    email: 'abc@deadlockfrance.fr',
    role: 'Dev',
    date: '2025-01-18',
  },
];

const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="flex flex-col">
        <div className="grid grid-cols-5 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Utilisateur
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Role
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Date
            </h5>
          </div>
        </div>

        {userData.map((user, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === userData.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <p className="hidden text-black dark:text-white sm:block">
                {user.name}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{user.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{user.role}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{user.date}</p>
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
    </div>
  );
};

export default TableOne;
