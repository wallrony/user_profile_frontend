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

export async function apiGet<T = any>(path: string): Promise<T> {
  const result = await api.get<T>(
    path,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiPost<T = any>(
  path: string,
  body: Record<string, any>
): Promise<T> {
  const result = await api.post<T>(
    path,
    body,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiPut<T = any>(
  path: string,
  body: Record<string, any>
): Promise<T> {
  const result = await api.put<T>(
    path,
    body,
    { headers: createAuthHeader() }
  );

  return result['data'];
}

export async function apiDelete<T = any>(path: string): Promise<T> {
  const result = await api.delete<T>(
    path,
    { headers: createAuthHeader() }
  );

  return result['data'];
}
