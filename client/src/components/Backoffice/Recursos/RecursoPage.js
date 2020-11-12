import React from 'react';
import './RecursosBack.css';

class RecursoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id, 
      pt_label: this.props.ptLabel, 
      en_label: this.props.enLabel, 
      link: this.props.link, 
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  } 

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.updatePage(this.state);
  }

  handleDelete = (event) => {
    event.preventDefault();
    this.props.deletePage(this.state.id);
  }

  render() {
    const { id, pt_label, en_label, link } = this.state;

    return (
      <div className="back-recurso-section">
        <form>
          <div className="input">
            { this.props.type ? '' : <div className="recursos-section-title">{pt_label}</div> }
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título PT:</div>
              <input
                type="text"
                name="pt_label"
                value={pt_label}
                onChange={this.handleChange}
                placeholder="Título da página"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Título EN:</div>
              <input
                type="text"
                name="en_label"
                value={en_label}
                onChange={this.handleChange}
                placeholder="Título da página em inglês"
                maxLength="100"
                required
              />
            </div>
            <div className="back-metodo-input">
              <div className="homepage-section-label">Link PDF:</div>
              <input
                type="text"
                name="link"
                value={link}
                onChange={this.handleChange}
                placeholder="Link do ficheiro PDF"
                required
              />
            </div>
            {this.props.type ? 
              <div className="back-recursos-button">
                <button
                className="recursos-button"
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleSubmit}
                >
                CRIAR
                </button>
              </div>
             :
              <div className="back-recursos-button">
                <button
                id={id}
                className="recursos-delete-button"
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleDelete}
              >
                <span role="img" aria-label="trash"> 🗑</span>
              </button>
              <button
                className="recursos-button"
                variant="contained"
                color="primary"
                type="submit"
                onClick={this.handleSubmit}
              >
                Guardar
              </button>
            </div>}
          </div>
        </form>
      </div>
    )
  };
};
 
export default RecursoPage;
