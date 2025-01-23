import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import CoverOne from '../images/cover/cover-01.png';
import userSix from '../images/user/user-06.png';
import { Link } from 'react-router-dom';

const PatchnotesManagement = () => {
  return (
    <>
      <Breadcrumb pageName="Gestion des Patchnotes" />
      <div>
        <TableOne/>
      </div>
    </>
  );
};

export default PatchnotesManagement;
