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
