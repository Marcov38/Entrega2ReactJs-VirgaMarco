import './Header.css';
import img from '../../assets/Logo3.png';

const Header = (props) => {
    return (
        <div className="Header">
            <img src={img} alt="logo-hi-my-party" />
        </div>
    );
};

export default Header;
