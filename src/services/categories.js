import axios from 'axios'
import { getHeaders } from './api'

export async function returnCategories () {
  return await axios.get('https://pizzaria-iunic.herokuapp.com/api/categoria', {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  })
}

export async function addCategory (data) {
  return await axios.post('https://pizzaria-iunic.herokuapp.com/api/categoria', {
    id: 0,
	  descricao: data.descricao
  },{
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })
}

export async function deleteCategory (id) {

  return await axios.delete(`https://pizzaria-iunic.herokuapp.com/api/categoria/${id}`, {
    headers: getHeaders(`Bearer ${localStorage.token}`)
  }).catch(function (error) {
    return error.response
  })

}