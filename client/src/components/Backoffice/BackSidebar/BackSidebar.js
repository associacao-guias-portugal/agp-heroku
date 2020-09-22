import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import './BackSidebar.css';
import brasaoLogo from '../../../assets/logo/brasao_RGB.png';
import Cookies from 'js-cookie';


const BackSidebar = (props) => {

  // const history = useHistory();

  return (
    <div className="BackSidebar">
      <div className="menu-bar">
        <Link to="/backoffice">
          <img className="brasao-logo" src={brasaoLogo} alt="Logo" />
        </Link>
        <Nav fixed="left">
          <Nav.Link><Link to="/backoffice/homepage">Homepage</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/associacao/painel">Associação</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/associacaoMundial">Assoc.Mundial</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/historia-guidismo">História Guidismo</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/metodo-guidista">Método Guidista</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/ramos">Ramos/Dirigente</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/palavra-aos-pais">Palavra Aos Pais</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/news/painel">Notícias</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/journal/painel">Jornal</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/recursos">Recursos (PDFs)</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/ligacoesUteis/Painel">Ligações Úteis</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/loja/painel">Loja</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/contato">Contactos</Link></Nav.Link>
          <Nav.Link><Link to="/backoffice/files">Outros PDFs</Link></Nav.Link>


        </Nav>
      </div>
      <button
        className="logout-button"
        onClick={() => {
          Cookies.remove("token")
          window.location.href = "/"
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default withRouter(BackSidebar);
