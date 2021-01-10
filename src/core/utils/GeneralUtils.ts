const errorNameMap: Record<string, string> = {
  'unimplemented method error': 'É necessário implementar o método utilizado.'
};

const errorCodeMap: Record<string, string> = {
  401: 'Sua sessão expirou. Tente realizar login novamente.'
};

export function createError(name: string, message?: string): Error {
  const err = Error();

  err.name = name;
  err.message = message ?? '';

  return err;
}

export function refValue(ref: React.RefObject<HTMLInputElement | HTMLSelectElement | undefined>) {
  if (ref?.current) {
    return ref.current.value.trim();
  }

  return '';
}

export function findErrorByName(name: string) {
  const err: string = errorNameMap[name];

  if(!err) {
    return 'Erro inesperado.';
  }

  return err;
}

export function findErrorByCode(code: number) {
  const err: string = errorCodeMap[code];

  if(!err) {
    return 'Erro inesperado.';
  }

  return err;
}
