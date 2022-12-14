import  '../StyleComponent/Switch.scss';
import  {useTheme} from '../HomeComponent/ThemeContext';


const Switch = () => {
    const { theme } = useTheme();
    return (
      <label className="switch">
        <input
          type="checkbox"
          checked={theme === "light"}
        />
        <span className="slider round" />
      </label>
    );
  };
  
export default Switch;
