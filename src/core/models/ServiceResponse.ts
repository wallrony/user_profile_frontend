interface ServiceResponse<T> {
  data?: T;
  err?: Error;
}

export default ServiceResponse;
