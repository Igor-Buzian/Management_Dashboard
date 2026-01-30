export const API = {
  USERS: {
    BASE: 'http://localhost:8080/v1/api/users',

    GET_ALL: () => API.USERS.BASE,
    CREATE: () => API.USERS.BASE,

    UPDATE: (id: number) => `${API.USERS.BASE}/${id}`,
    DELETE: (id: number) => `${API.USERS.BASE}/${id}`,
  },
};
