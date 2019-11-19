import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const tamanhoAlfabeticoService = {
  getAll,
  register,
  update,
  delete: _delete
}

function getAll () {
  const requestOptions = {
    method: 'GET',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/TamanhoAlfabetico/ObterTodosTamanhosAlfabeticos`, requestOptions).then(handleResponse)
}

function register (tamanhoAlfabetico) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(tamanhoAlfabetico)
  }
  return fetch(`${config.apiUrl}/TamanhoAlfabetico/AdicionarNovoTamanhoAlfabetico`, requestOptions).then(handleResponse)
}

function update (tamanhoAlfabetico) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(tamanhoAlfabetico)
  }
  return fetch(`${config.apiUrl}/TamanhoAlfabetico/AtualizarTamanhoAlfabetico/${tamanhoAlfabetico.idTamanhoAlfabetico}`, requestOptions).then(handleResponse)
}

function _delete (idTamanhoAlfabetico) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/TamanhoAlfabetico/ExcluirTamanhoAlfabetico/${idTamanhoAlfabetico}`, requestOptions).then(handleResponse)
}

function handleResponse (response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text)
    if (!response.ok) {
      if (response.status === 401) {
        userService.logout()
        location.reload(true)
      } else {
        return data
      }
      const error = (data && data.message) || response.statusText
      return Promise.reject(error)
    }
    return data
  })
}
