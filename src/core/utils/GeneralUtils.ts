const errorMap: Record<string, string> = {
  'unimplemented method error': 'É necessário implementar o método utilizado.'
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
  const err: string = errorMap[name];

  if(!err) {
    return 'Erro inesperado.';
  }

  return err;
}
