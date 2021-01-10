interface ServiceResponse<T> {
  data?: T;
  err?: string;
}

export default ServiceResponse;
