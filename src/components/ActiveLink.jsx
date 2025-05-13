
import { NavLink } from 'react-router-dom';
const ActiveLink = ({to, children}) => {
    return (
        <NavLink
      to={to}
      className={({ isActive }) =>
        `mb-2 flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
          isActive ? "bg-tomato-400 text-white font-semibold" : "text-black"
        }`
      }
    >
      {children}
    </NavLink>
    );
};

export default ActiveLink;