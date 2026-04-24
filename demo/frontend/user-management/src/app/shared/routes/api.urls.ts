import {environment} from './environment';

const BASE = environment.apiBaseUrl;

export const API = {
  USERS: {
    GET_ALL: () => `${BASE}/users`,
    CREATE: () => `${BASE}/users`,
    UPDATE: (id: number) => `${BASE}/users/${id}`,
    DELETE: (id: number) => `${BASE}/users/${id}`,
  },
};
