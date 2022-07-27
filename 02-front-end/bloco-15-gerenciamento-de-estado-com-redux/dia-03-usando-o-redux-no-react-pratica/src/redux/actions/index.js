export const CHANGE_PERSONAL_INFORMATION = 'CHANGE_PERSONAL_INFORMATION';
export const changePersonalInformation = (values) => ({
  type: CHANGE_PERSONAL_INFORMATION, payload: values,
});

export const CHANGE_PROFISSIONAL_INFORMATION = 'CHANGE_PROFISSIONAL_INFORMATION';
export const changeProfissionalInformation = (values) => ({
  type: CHANGE_PROFISSIONAL_INFORMATION, payload: values,
});
