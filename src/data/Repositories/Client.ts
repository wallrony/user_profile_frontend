import axios from 'axios';

import { getApiURL } from '../../core/utils/ResponseUtils';
import StorageController from '../static/StorageController';

const api = axios.create({
  baseURL: getApiURL(),
  headers: createBaseHeaders(),
});

function createBaseHeaders() {
  const headers: Record<string, string> = {}

  headers['Content-Type'] = 'application/json';

  return headers;
}

function createAuthHeader() {
  const token = StorageController.getToken();

  if(!token.length) {
    return {};
  }

  return {
    'Authorization': `Token ${token}`,
  };
}

export async function apiGet(path: string) {
  const result = await api.get(
    path,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiPost(path: string, body: Record<string, any>) {
  const result = await api.post(
    path,
    body,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiPut(path: string, body: Record<string, any>) {
  const result = await api.put(
    path,
    body,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiDelete(path: string) {
  const result = await api.delete(
    path,
    { headers: createAuthHeader() }
  );

  return result['data'];
}
