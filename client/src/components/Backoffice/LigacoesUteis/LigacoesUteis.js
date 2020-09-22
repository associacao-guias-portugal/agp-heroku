import React from "react";
import "./../Journal/Journal.css";
import PopUp from "../PopUp/PopUp";
import axios from "axios";

class LigacoesUteis extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            link: "",
            pt_text: "",
            en_text: "",
            messageStatus: "",
            flash: "",
        };
    }

    componentDidMount = () => {
        window.scrollTo(0, 0);
        const { match } = this.props;
        const getId = match.params.id;

        getId &&
            axios.get(`/ligacoes-uteis/${getId}`)
                .then((res) => {
                    this.setState({
                        id: res.data[0].id,
                        link: res.data[0].link,
                        pt_text: res.data[0].pt_text,
                        en_text: res.data[0].en_text,
                    });
                });
    };

    handleChange = (event) => {
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    };

    updatePublish = () => {
        let publish = this.state.publish;
        this.setState({ publish: !publish });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { flash, messageStatus, id, ...newLink } = this.state;
        const { match, history } = this.props;
        const getId = match.params.id;

        getId
            ? axios.put(`/ligacoes-uteis/${getId}`, newLink)
                .then((res) => {
                    this.setState({ messageStatus: "success" }, () => {
                        setTimeout(
                            () => history.push({ pathname: "/backoffice/ligacoesUteis/painel" }),
                            1500
                        );
                    });
                    this.setState({ flash: "Guardado com sucesso" });
                })
                .catch((err) => {
                    this.setState({ messageStatus: "error" });
                    this.setState({
                        flash: "Ocorreu um erro, por favor tente de novo",
                    });
                })
            : axios.post("/ligacoes-uteis/newLink", newLink)
                .then((res) => {
                    this.setState({ messageStatus: "success" }, () =>
                        setTimeout(
                            () => history.push({ pathname: "/backoffice/ligacoesUteis/painel" }),
                            1500
                        )
                    );
                    this.setState({ flash: "Criado com sucesso" });
                })
                .catch((err) => {
                    this.setState({ messageStatus: "Error" });
                    this.setState({
                        flash: "Ocorreu um erro, por favor volte a tentar",
                    });
                });
    };

    render() {
        const { match } = this.props;
        const getId = match.params.id;

        return (
            <div class="body">
                <form
                    className="NoticiaInput-section"
                    onSubmit={(event) => this.handleSubmit(event)}
                >
                    <div className="NoticiaInput-title">Ligações Úteis</div>
                    <div>
                        {getId &&

                            <div className="input-section-label-edicao">
                                Id do Link: {this.state.id}
                            </div>
                        }
                    </div>


                    <div className="input">
                        <div className="input-section-label">Link</div>
                        <input
                            name="link"
                            type="text"
                            value={this.state.link}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Descrição PT:</div>
                        <input
                            name="pt_text"
                            type="text"
                            value={this.state.pt_text}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="input">
                        <div className="input-section-label">Descrição EN:</div>
                        <input
                            name="en_text"
                            type="text"
                            value={this.state.en_text}
                            onChange={(event) => this.handleChange(event)}
                        />
                    </div>
                    <div className="NoticiaInput-section-button">
                        <button className="login-button" type="submit">
                            GUARDAR
            </button>
                    </div>
                </form>
                <PopUp
                    flashInput={this.state.flash}
                    typeMessage={this.state.messageStatus}
                />
            </div>
        );
    }
}

export default LigacoesUteis;
