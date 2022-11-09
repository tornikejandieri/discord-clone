

interface Props {
  icon: any
}


const SideBarIcon: React.FC<Props> = ({icon, text = 'tooltip'}) => {
  return ( 
    <div className="sidebar-icon group">
      {icon}

      <span className="sidebar-tooltip group-hover:scale-100">
        {text}
      </span>
    </div>
   );
}
 
export default SideBarIcon;