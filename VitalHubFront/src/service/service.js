import axios from "axios";

// Declarar a porta da API
const portaApi = '4466'

// Declarar o ip da maquina
 const ip = '192.168.21.113'

 // Definir a base da url de acesso da api
 const apiUrlLocal = `http://${ip}:${portaApi}/api`

 //Configura o axios
const api = axios.create({
    baseURL : apiUrlLocal
})

export default api;