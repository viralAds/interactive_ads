import './Homepage.scss';
import Navbar from '../Navbar/Navbar';
import ekaleidoLogo from '../assets/ekaleidoLogo.png';
import { Container } from 'reactstrap';

function Hompage() {
    return (
        <div>
           <Navbar /> 
           <div className="landing-area">
                <Container>
                    <img src={ekaleidoLogo} alt="ekaleidoLogo" />
                    <p>eKaleido.Tech</p>
                </Container>
           </div>
        </div>
    )
}

export default Hompage
