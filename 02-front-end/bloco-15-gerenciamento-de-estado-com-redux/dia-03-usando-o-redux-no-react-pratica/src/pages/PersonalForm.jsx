import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { changePersonalInformation } from '../redux/actions';

import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
      redirect: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { setPersonalInformation } = this.props;

    const {
      name,
      email,
      cpf,
      address,
      city,
      uf,
    } = this.state;

    const data = {
      name,
      email,
      cpf,
      address,
      city,
      uf,
    };

    setPersonalInformation(data);
    this.setState({ redirect: true });
    console.log(changePersonalInformation(data));
  }

  render() {
    const { name, email, cpf, address, city, uf, redirect } = this.state;

    if (redirect) return <Redirect to="/professionalform" />;

    const ufList = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];

    return (
      <fieldset>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          defaultValue={ uf }
          value={ uf }
          label="Estado: "
          id="uf"
          name="uf"
          options={ ufList }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

PersonalForm.propTypes = {
  setPersonalInformation: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setPersonalInformation: (values) => dispatch(changePersonalInformation(values)),
});

export default connect(null, mapDispatchToProps)(PersonalForm);
