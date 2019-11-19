import { authHeader } from '../_helpers'
import { userService, config } from '.'

export const tamanhoNumericoService = {
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
  return fetch(`${config.apiUrl}/TamanhoNumerico/ObterTodosTamanhosNumericos`, requestOptions).then(handleResponse)
}

function register (tamanhoNumerico) {
  const requestOptions = {
    method: 'POST',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(tamanhoNumerico)
  }
  return fetch(`${config.apiUrl}/TamanhoNumerico/AdicionarNovoTamanhoNumerico`, requestOptions).then(handleResponse)
}

function update (tamanhoNumerico) {
  const requestOptions = {
    method: 'PUT',
    headers: { ...authHeader(), 'Content-Type': 'application/json' },
    body: JSON.stringify(tamanhoNumerico)
  }
  return fetch(`${config.apiUrl}/TamanhoNumerico/AtualizarTamanhoNumerico/${tamanhoNumerico.idTamanhoNumerico}`, requestOptions).then(handleResponse)
}

function _delete (idTamanhoNumerico) {
  const requestOptions = {
    method: 'DELETE',
    headers: authHeader()
  }
  return fetch(`${config.apiUrl}/TamanhoNumerico/ExcluirTamanhoNumerico/${idTamanhoNumerico}`, requestOptions).then(handleResponse)
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
