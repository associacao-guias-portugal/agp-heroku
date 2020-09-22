import React from 'react';
import axios from 'axios';
import PopUp from '../PopUp/PopUp';
import RecursoPage from './RecursoPage';
import ModalPopup from '../Noticias/PopUpDeleteNoticias';
import './RecursosBack.css';

class RecursosBack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recursosData: [],
      newPage: [],
      flash: '',
      messageStatus: '',
      showModal: false,
      pageId: 0
    }
  }

  componentDidMount = () => {
    window.scrollTo(0, 0);
    this.getData();
  }

  getData = () => {
    axios.get(`/recursos`)
    .then((res) => {
      this.setState({ 
        recursosData: res.data
      })
    })
  }

  handlePageUpdate = (page) => {
    const { id, ...data } = page;
    const { history } = this.props;

    axios.put(`/recursos/${id}`, data)
    .then((res) => {
      this.setState({ messageStatus: 'success' },() => {
        setTimeout(() => history.push({ pathname: '/backoffice/recursos' }), 1500)
      });
      this.setState({ flash: 'Alterado com sucesso.' });;
    })
    .catch((err) => {
      this.setState({
        messageStatus: 'error',
        flash: 'Ocorreu um erro, por favor tente outra vez.',
      });
    });
  }

  newPage = (page) => {
    const { id, ...data } = page;
    const { history } = this.props;

    axios.post(`/recursos/new`, data)
    .then((res) => {
      this.setState({ messageStatus: 'success' },() => {
        setTimeout(() => history.push({ pathname: '/backoffice/recursos' }), 1500)
      });
      this.setState({ flash: 'Criado com sucesso.' });;
    })
  }

  handleDelete = (id) => {
    this.setState({ 
      showModal: true,
      pageId: id
    });
  }

  handleModalDelete = () => {
    const { pageId } = this.state;
    axios.delete(`/recursos/${pageId}`)
    .then((res) => {
      this.setState({ showModal: false });
    });
    window.location.reload();
  };

  handleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  };

  render() {
    const { recursosData, flash, messageStatus, showModal } = this.state;

    return (
      <div className="RecursosBack">
        <div className="back-recurso-title">Recursos - Páginas PDFs</div>
        { recursosData.map( item => 
          <RecursoPage 
            key={item.id} 
            id={item.id}
            ptLabel={item.pt_label} 
            enLabel={item.en_label}
            link={item.link}
            updatePage={this.handlePageUpdate}
            deletePage={this.handleDelete}
          />
        )}
        
        <hr className="recursos-divide" />

        <div className="back-recurso-title">Nova Página PDF</div>
        <RecursoPage 
          type
          updatePage={this.newPage}
        />
        {showModal ?
          <ModalPopup
            show={showModal}
            handleDelete={this.handleModalDelete}
            handleClose={this.handleModal}
          />
          : ''
        } 
        <PopUp flashInput={flash} typeMessage={messageStatus} />
      </div>
    )
  };
};
 
export default RecursosBack;