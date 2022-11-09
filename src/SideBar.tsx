import {AiOutlinePlus} from 'react-icons/Ai'
import {FaCompass} from 'react-icons/Fa'
import {FaDiscord} from 'react-icons/Fa'
import {FiDownload} from 'react-icons/Fi'
import SideBarIcon from './SideBarIcon';

const SideBar: React.FC = () => {
  return ( 
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <SideBarIcon icon={<FaDiscord size='28'  />} />
      <SideBarIcon icon={<AiOutlinePlus size='28' />} />
      <SideBarIcon icon={<FaCompass size='28' />} />
      <SideBarIcon icon={<FiDownload size='28' />} />
    </div>
   );
}
 
export default SideBar;