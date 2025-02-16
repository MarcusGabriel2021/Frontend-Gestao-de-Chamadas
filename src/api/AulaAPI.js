import BaseAPI from './BaseAPI.js';

class AulaAPI extends BaseAPI {

    getAulas(setData) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/aula`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getAula(setData, id) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/aula/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirAula(aula) {
        const method = "POST";
        const url = `${this.baseUrl}api/v1/aula`;
        console.log(url);
        super.myFetch({}, method, url, aula);
    }

    alterarAula(aula) {
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/aula`;
        console.log(url);
        super.myFetch({}, method, url, aula);
    }

    excluir(id) {
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/aula/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default AulaAPI;
