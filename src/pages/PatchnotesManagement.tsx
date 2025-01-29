import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../components/Tables/TableTwo';


const PatchnotesManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Gestion des Patchnotes" />
      <div className="mb-4 flex justify-start">
        <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600" 
                onClick={() => console.log('Créer un patchnote')}>
                Ajouter un Patchnote
        </button>
      </div>
      <div>
        <TableTwo/>
      </div>
    </>
  );
};

export default PatchnotesManagement;
