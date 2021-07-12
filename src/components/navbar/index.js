import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import { Header, Div,Drop } from './style'
import logo from '../../logo.svg'
import { red } from '@material-ui/core/colors';


function NavBar() {
    return (
        <Header>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"}/>
            <span>Início</span>
            <span>Séries</span>
            <span>Filmes</span>
            <span>Bombando</span>
            <span>Minha lista</span>
            <Div>
            <Search style={{ color: red[500] }} />
            <span>INFANTIL</span>
            <Notifications style={{ color:red[500]}}/>
            </Div>
            <Drop>
            <ArrowDropDown style={{color:red[500]}}/>
            <span>Conta</span>
            <span>Sair do perfil</span>
            </Drop>       
        </Header>
     
    )
  }
  
  export default NavBar;