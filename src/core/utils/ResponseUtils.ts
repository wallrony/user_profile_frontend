const errorMessages: Record<string, string> = {
  'unauthorized-user': 'A sua sessão expirou. Por favor, entre novamente.',
  'invalid-credentials': 'E-mail ou senha incorretos.',
  'user-not-encountered': 'Não foi possível recuperar seus dados. Por favor, realize login novamente.',
  'service-not-encountered': 'Não foi possível encontrar o serviço especificado.',
  'attendance-not-encountered': 'Não foi possível encontrar o atendimento especificado.',
  'internal-error': 'Ocorreu um erro interno. Por favor, entre em contato com o suporte.'
}

const errorMessagesByCode: Record<number, string> = {
  401: errorMessages['unauthorized-user'],
  500: errorMessages['internal-error'],
};

export function findErrorMessage(code: string | number) {
  let message;

  if(typeof(code) === 'number') {
    message = errorMessagesByCode[code];
  } else {
    message = errorMessages[code];
  }

  if(!message) {
    message = 'Ocorreu um erro interno. Por favor, contate o suporte.';
  }

  return message;
}

export function createError(name: string, message: string = '') {
  const error: Error = Error();

  error.name = name;
  error.message = message;

  return error;
}

export function getApiURL() {
  return 'http://localhost:3001/api';
}
