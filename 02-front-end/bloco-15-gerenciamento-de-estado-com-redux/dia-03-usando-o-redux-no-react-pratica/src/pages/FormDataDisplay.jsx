import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const {
      personalInformation: { name, email, cpf, address, city, uf },
      profissionalInformation: { curriculum, job, description },
    } = this.props;

    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { name }
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { address }
        </div>
        <div>
          Cidade:
          { city }
        </div>
        <div>
          Estado:
          { uf }
        </div>
        <div>
          Currículo:
          { curriculum }
        </div>
        <div>
          Cargo:
          { job }
        </div>
        <div>
          Descrição do cargo:
          { description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personalInformation: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    uf: PropTypes.string,
  }).isRequired,
  profissionalInformation: PropTypes.shape({
    description: PropTypes.string,
    job: PropTypes.string,
    curriculum: PropTypes.string,
  }).isRequired,

};

const mapStateToProps = (estado) => ({
  personalInformation: estado.personalInformation,
  profissionalInformation: estado.profissionalInformation,
});

export default connect(mapStateToProps)(FormDataDisplay);
