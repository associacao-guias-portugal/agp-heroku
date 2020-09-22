import React, { Suspense, useEffect, useState, useContext } from 'react';
import './App.css';
import {
  Switch,
  Route,
  useHistory,
  Redirect
} from 'react-router-dom';
import './i18n';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';
import RamosDirigente from './components/RamosDirigente/RamosDirigente';
import AssociacaoMundial from './components/AssociacaoMundial/AssociacaoMundial2';
import PalavraAosPais from './components/PalavraAosPais/PalavraAosPais';
import Noticias from './components/Noticias/Noticias';
import LigacoesUteis from './components/LigacoesUteis/LigacoesUteis2';
import Contactos from './components/Contactos/Contactos';
import Footer from './components/Footer/Footer';
import AssociacaoFront from './components/Associacao/AssociacaoFront2';
import LojaMaster from './components/Loja/LojaMaster';
import ConteudoNoticia from './components/ConteudoNoticia/ConteudoNotica';
import Search from './components/Search/Search';
import Jornal from './components/Jornal/Jornal';
import HistoriaGuidismo from './components/HistoriaGuidismo/HistoriaGuidismo';
import Login from './components/Backoffice/Login/Login';
import NoticiaInput from './components/Backoffice/Noticias/NoticiaInput';
import MetodoGuidista from './components/MetodoGuidista/MetodoGuidista';
import FerramentasGuidista from './components/MetodoGuidista/FerramentasGuidista';
import ProjetoGuidista from './components/MetodoGuidista/ProjetoGuidista';
import MediaShare from './components/MediaShare/MediaShare';
import HomepageBackoffice from './components/Backoffice/Homepage/HomepageBackoffice';
import JournalInput from './components/Backoffice/Journal/Journal'
import JournalPainel from './components/Backoffice/Journal/TableJournal'
import NoticiasPainel from './components/Backoffice/Noticias/NoticiasPainel';
import IntroPage from './components/Backoffice/IntroPage/IntroPage';
import BackSidebar from './components/Backoffice/BackSidebar/BackSidebar';
import ForgotPassword from './components/Backoffice/ForgotPassword/ForgotPassword';
import RamosBackoffice from './components/Backoffice/Ramos/RamosBackoffice';
import ContatoInput from './components/Backoffice/Contato/ContatoInput';
import Files from './components/Backoffice/Files/Files';
import MetodoBackoffice from './components/Backoffice/MetodoGuidista/MetodoBackoffice';
import MetodoProjetoBack from './components/Backoffice/MetodoGuidista/MetodoProjetoBack';
import MetodoFerramentaBack from './components/Backoffice/MetodoGuidista/MetodoFerramentaBack';
import MetodoAtividadesBack from './components/Backoffice/MetodoGuidista/MetodoAtividadeBack';
import MetodoConstantesBack from './components/Backoffice/MetodoGuidista/MetodoConstantesBack';
import AssociationInput from './components/Backoffice/Association/Association'
import AssociationTable from './components/Backoffice/Association/AssociationTable';
import StoreInput from './components/Backoffice/Store/Store'
import TableStore from './components/Backoffice/Store/TableStore'
import PalavraAosPaisInput from './components/Backoffice/PalavraAosPais/PalavraAosPaisInput';
import PalavraAosPaisCard from './components/Backoffice/PalavraAosPais/PalavraAosPaisCard';
import PalavraAosPaisTextoImagem from './components/Backoffice/PalavraAosPais/PalavraAosPaisTextoImagem';
import RecursosBackoffice from './components/Backoffice/Recursos/RecursosBack';
import HistoriaGuidismoInput from './components/Backoffice/HistoriaGuidismo/HistoriaGuidismoInput';
import HistoriaDoGuidismoTimelineOne from './components/Backoffice/HistoriaGuidismo/HistoriaGuidismoTimelineOneInput';
import HistoriaDoGuidismoTimelineTwo from './components/Backoffice/HistoriaGuidismo/HistoriaGuidismoTimelineTwoInput';
import WorldAssociation from './components/Backoffice/WorldAssociation/WorldAssociation'
import LigacoesUteisPainel from './components/Backoffice/LigacoesUteis/LigacoesUteisPainel'
import LigacoesUteisInput from './components/Backoffice/LigacoesUteis/LigacoesUteis'


import { UserContext } from './context/UserContext';

function App() {

  //const currentPath = window.location.pathname;

  const history = useHistory();

  const currentPath = history.location.pathname;

  const [locationPath, setLocationPath] = useState('/');

  useEffect(() => {
    return history.listen((location) => {
      setLocationPath(location.pathname);
    });
  }, [history]);

  return (
    <div className="App">
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/sobre/associacao" component={AssociacaoFront} />
          <Route exact path="/sobre/historia-guidismo" component={HistoriaGuidismo} />
          <Route exact path="/sobre/associacao-mundial" component={AssociacaoMundial} />
          <Route exact path="/pedagogia/metodo-guidista" component={MetodoGuidista} />
          <Route exact path="/pedagogia/metodo-guidista/ferramentas/:ferramenta" component={FerramentasGuidista} />
          <Route exact path="/pedagogia/metodo-guidista/projetos/:projeto" component={ProjetoGuidista} />
          <Route exact path="/pedagogia/palavra-pais" component={PalavraAosPais} />
          <Route exact path="/pedagogia/:tipo" component={RamosDirigente} />
          <Route exact path="/publicações/jornal-trevo" component={Jornal} />
          <Route exact path="/publicações/noticias" component={Noticias} />
          <Route exact path="/publicações/noticias/:id" component={ConteudoNoticia} />
          <Route exact path="/publicações/recursos/ligações-úteis" component={LigacoesUteis} />
          <Route exact path="/loja/:itemCategory" component={LojaMaster} />
          <Route exact path="/contactos/:modo" component={Contactos} />
          <Route exact path="/search" component={Search} />


          <Route exact path="/login" component={Login} />
          <Route exact path="/login-password" component={ForgotPassword} />
          <ProtectedRoute exact path="/backoffice" component={IntroPage} />
          <ProtectedRoute exact path="/backoffice/homepage" component={HomepageBackoffice} />

          <ProtectedRoute exact path="/backoffice/journal/painel" component={JournalPainel} />
          <ProtectedRoute exact path="/backoffice/journal/painel/new" component={JournalInput} />
          <ProtectedRoute exact path="/backoffice/journal/painel/:edition" component={JournalInput} />

          <ProtectedRoute exact path="/backoffice/news/painel" component={NoticiasPainel} />
          <ProtectedRoute exact path="/backoffice/news/painel/new" component={NoticiaInput} />
          <ProtectedRoute exact path="/backoffice/news/painel/:id" component={NoticiaInput} />

          <ProtectedRoute exact path="/backoffice/ramos" component={RamosBackoffice} />

          <ProtectedRoute exact path="/backoffice/contato" component={ContatoInput} />

          <ProtectedRoute exact path="/backoffice/files" component={Files} />

          <ProtectedRoute exact path="/backoffice/metodo-guidista" component={MetodoBackoffice} />
          <ProtectedRoute exact path="/backoffice/metodo-guidista/projetos/:item" component={MetodoProjetoBack} />
          <ProtectedRoute exact path="/backoffice/metodo-guidista/ferramentas/:item" component={MetodoFerramentaBack} />
          <ProtectedRoute exact path="/backoffice/metodo-guidista/atividades/:item" component={MetodoAtividadesBack} />
          <ProtectedRoute exact path="/backoffice/metodo-guidista/constantes/:item" component={MetodoConstantesBack} />

          <ProtectedRoute exact path="/backoffice/recursos" component={RecursosBackoffice} />

          <ProtectedRoute exact path="/backoffice/associacao/new" component={AssociationInput} />
          <ProtectedRoute exact path="/backoffice/associacao/painel/:section_id" component={AssociationInput} />
          <ProtectedRoute exact path="/backoffice/associacao/painel" component={AssociationTable} />

          <ProtectedRoute exact path="/backoffice/loja/new" component={StoreInput} />
          <ProtectedRoute exact path="/backoffice/loja/painel/:id" component={StoreInput} />
          <ProtectedRoute exact path="/backoffice/loja/painel" component={TableStore} />

          <ProtectedRoute exact path="/backoffice/palavra-aos-pais" component={PalavraAosPaisInput} />
          <ProtectedRoute exact path="/backoffice/palavra-aos-pais/card/:id" component={PalavraAosPaisCard} />
          <ProtectedRoute exact path="/backoffice/palavra-aos-pais/text-image" component={PalavraAosPaisTextoImagem} />
          <ProtectedRoute exact path="/backoffice/palavra-aos-pais/text-image/:id" component={PalavraAosPaisTextoImagem} />

          <ProtectedRoute exact path="/backoffice/historia-guidismo" component={HistoriaGuidismoInput} />
          <ProtectedRoute exact path="/backoffice/historia-guidismo/timeline-one" component={HistoriaDoGuidismoTimelineOne} />
          <ProtectedRoute exact path="/backoffice/historia-guidismo/timeline-one/:id" component={HistoriaDoGuidismoTimelineOne} />
          <ProtectedRoute exact path="/backoffice/historia-guidismo/timeline-two" component={HistoriaDoGuidismoTimelineTwo} />
          <ProtectedRoute exact path="/backoffice/historia-guidismo/timeline-two/:id" component={HistoriaDoGuidismoTimelineTwo} />

          <ProtectedRoute exact path="/backoffice/associacaoMundial/" component={WorldAssociation} />

          <ProtectedRoute exact path="/backoffice/ligacoesUteis/painel" component={LigacoesUteisPainel} />
          <ProtectedRoute exact path="/backoffice/ligacoesUteis/painel/new" component={LigacoesUteisInput} />
          <ProtectedRoute exact path="/backoffice/ligacoesUteis/painel/:id" component={LigacoesUteisInput} />


        </Switch>
        {!currentPath.includes('backoffice') && !currentPath.includes('login')
          && (
            <div>
              <Header />
              {locationPath !== '/' ? <MediaShare /> : <MediaShare currentPath="homepage" />}
              <Footer />
            </div>
          )}
        { !currentPath.includes('login') && currentPath.includes('backoffice') && (
          <div>
            <BackSidebar />
          </div>
        )}
      </Suspense>
    </div>
  );
}


const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user, auth } = useContext(UserContext);
  console.log(auth)
  return (
    <Route
      {...rest}
      component={(props) =>
        auth ? <Component {...props} /> : <Redirect to='/backoffice' />
      }
    />
  );
};

export default App;
