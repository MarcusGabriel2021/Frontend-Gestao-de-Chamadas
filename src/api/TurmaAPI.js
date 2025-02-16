import BaseAPI from "./BaseAPI";

class TurmaAPI extends BaseAPI {

    getTurmas(setData) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/turma`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    getTurma(setData, id) {
        const method = "GET";
        const url = `${this.baseUrl}api/v1/turma/${id}`;
        console.log(url);
        super.myFetch(setData, method, url);
    }

    incluirTurma(turma) {
        const method = "POST";
        const url = `${this.baseUrl}api/v1/turma`;
        console.log(url);
        super.myFetch({}, method, url, turma);
    }

    alterarTurma(turma) {
        const method = "PUT";
        const url = `${this.baseUrl}api/v1/turma`;
        console.log(url);
        super.myFetch({}, method, url, turma);
    }

    excluir(id) {
        const method = "DELETE";
        const url = `${this.baseUrl}api/v1/turma/${id}`;
        console.log(url);
        super.myFetch({}, method, url);
    }

}

export default TurmaAPI;
