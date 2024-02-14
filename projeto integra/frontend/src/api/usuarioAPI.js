import axios from "axios"

const API = {
  getAll: async () => {
    try {
      const response = await axios.get("http://localhost:8080/API/USERS")
      return response.data
    } catch (error) {
      console.error("Erro ao buscar usuários: " + error)
    }
  },

  delete: async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/API/DELETE/${id}`)
      return response.data
    } catch (error) {
      console.error("Erro ao deletar usuário: " + error);
    }
  },

  update: async (id, dadosNovos) => {
    try {
      const response = await axios.put(`http://localhost:8080/API/EDIT${id}`, dadosNovos)
      return response.data
    } catch (error) {
      console.error("Erro ao editar usuário: " + error);
    }
  }

}

export default API
