import BaseAPI from "./BaseAPI";

class PresencaAPI extends BaseAPI {

    getPresencas(setData) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/presenca`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getPresenca(setData, id) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/presenca/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirPresenca(presenca) {
        const method = "POST";
        const url = `${this.baseUrl}api/v1/presenca`;
        console.log(url);
        super.myFetch({}, method, url, presenca);
    }

    alterarPresenca(presenca) {
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/presenca`;
        console.log(url);
        super.myFetch({}, method, url, presenca);
    }

    excluir(id) {
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/presenca/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default PresencaAPI;
