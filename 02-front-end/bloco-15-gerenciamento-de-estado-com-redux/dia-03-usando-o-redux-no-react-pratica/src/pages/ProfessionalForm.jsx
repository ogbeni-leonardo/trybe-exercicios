import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Redirect } from 'react-router-dom';
import { changeProfissionalInformation } from '../redux/actions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();

    this.state = {
      curriculum: '',
      job: '',
      description: '',
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
    const { curriculum, job, description } = this.state;
    const { setProfissionalInformation } = this.props;

    setProfissionalInformation({
      curriculum, job, description,
    });

    this.setState({ redirect: true });
  }

  render() {
    const { curriculum, job, description, redirect } = this.state;

    if (redirect) return <Redirect to="/formdisplay" />;

    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ this.handleSubmit }
        />
      </fieldset>
    );
  }
}

ProfessionalForm.propTypes = {
  setProfissionalInformation: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  setProfissionalInformation: (values) => dispatch(changeProfissionalInformation(values)),
});

export default connect(null, mapDispatchToProps)(ProfessionalForm);
