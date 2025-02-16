import BaseAPI from './BaseAPI.js';

class MembroAPI extends BaseAPI {

    getMembros(setData) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/membro`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getMembro(setData, id) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/membro/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirMembro(membro) {
        const method = "POST";
        const url = `${this.baseUrl}api/v1/membro`;
        console.log(url);
        super.myFetch({}, method, url, membro);
    }

    alterarMembro(membro) {
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/membro`;
        console.log(url);
        super.myFetch({}, method, url, membro);
    }

    excluir(id) {
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/membro/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default MembroAPI;
