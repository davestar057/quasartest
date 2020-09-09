import { axiosInstance } from 'boot/axios'

export const SignIn = async ({commit, dispatch, state}, credentials) => {
  await axiosInstance.get('sanctum/csrf-cookie');
  await axiosInstance.post('login', {
    email: credentials.email,
    password: credentials.password
  })

  dispatch('me')
};


export const signOut = async({commit, dispatch, state}) => {
  await axiosInstance.post('logout');
  return dispatch('me')

};

export const me = ({commit, dispatch, state}) => {

  return axiosInstance.get('api/user').then((response) => {
    commit('SET_AUTHENTICATED', true)
    commit('SET_USER', response.data)
  }).catch(() => {
    commit('SET_AUTHENTICATED', false)
    commit('SET_USER', null)
  });
};


export const RegisterUser = async({commit, dispatch, state}, credentials) => {

  await axiosInstance.post('register', {
    email: credentials.email,
    password: credentials.password,
    password_confirmation: credentials.password_confirmation,
    name: credentials.name,
  });

  return dispatch('me')

};
