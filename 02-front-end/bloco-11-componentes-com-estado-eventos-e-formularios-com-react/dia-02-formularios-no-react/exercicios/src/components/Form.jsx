import React, { Component } from 'react';

import estados from '../data';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      ...this.initialState(),
    };
  }

  initialState = () => ({
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    state: '',
    type: '',
    resume: '',
    work: '',
    description: '',
    validateForm: {},
  });

  handleChange = ({ target }) => {
    const name = target.name;
    let value = target.value;
    
    if (name === 'name') value = value.toUpperCase();

    this.setState({ [target.type === 'radio' ? 'type' : name]: value });
  }

  validateEmail= (email) => email.match('/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i');

  render() {
    const {
      name,
      email,
      cpf,
      address,
      city,
      state,
      type,
      resume,
      work,
      description,
    } = this.state;

    return (
      <form>
        <fieldset>
          <legend>Ainda sem legenda</legend>
          <label htmlFor='name'>
            Nome:
            <input
              maxLength={40}
              name='name'
              id='name'
              type='text'
              value={name}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='email'>
            E-mail:
            <input
              maxLength={50}
              name='email'
              id='email'
              type='email'
              value={email}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='cpf'>
            CPF:
            <input
              maxLength={11}
              name='cpf'
              id='cpf'
              type='text'
              value={cpf}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='address'>
            Endereço:
            <input
              maxLength={200}
              name='address'
              id='address'
              type='text'
              value={address}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='city'>
            Cidade:
            <input
              maxLength={28}
              name='city'
              id='city'
              type='text'
              value={city}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='state'>
            Estado:
            <select
              id='state'
              name='state'
              value={state}
              onChange={this.handleChange}
              required
            >
              {estados.map((estado) => (
                <option value={estado}>{estado}</option>
              ))}
            </select>
          </label>

          <label htmlFor='typeOne'>
            Casa:
            <input
              name='house'
              id='typeOne'
              type='radio'
              value='Casa'
              checked={type === 'Casa'}
              onChange={this.handleChange}
              required
            />
          </label>

          <label htmlFor='typeTwo'>
            Apartamento:
            <input
              name='apartment'
              id='typeTwo'
              type='radio'
              value='Apartamento'
              checked={type === 'Apartamento'}
              onChange={this.handleChange}
              required
            />
          </label>
        </fieldset>

        <fieldset>
          <legend>Ainda sem legenda</legend>
          <label htmlFor='resume'>
            Resumo do Currículo:
            <textarea
              name='resume'
              id='resume'
              maxLength={1000}
              value={resume}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>

          <label htmlFor='work'>
            Cargo:
            <textarea
              name='work'
              id='work'
              maxLength={40}
              value={work}
              onChange={this.handleChange}
              required
            ></textarea>
          </label>

          <label htmlFor='description'>
            Descrição do cargo:
            <input
              name='description'
              id='description'
              type='text'
              value={description}
              onChange={this.handleChange}
              required
            />
          </label>
        </fieldset>

        <button type='submit'>Processar informações</button>
        <button type='reset'>Limpar o formulário</button>
      </form>
    );
  }
}
