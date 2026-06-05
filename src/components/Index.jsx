import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Formulario() {
    const [id, setId] = useState("");
    const [cliente, setCliente] = useState(null);

    const fetchCliente = () => {
        if (!id) {
            console.log("Por favor, digite um ID antes de buscar.");
            return;
        }

        axios
            .get(`https://6a20b7cfe96c1d13b587cbbb.mockapi.io/clientes/${id}`)
            .then((response) => {
                setCliente(response.data);
            })
            .catch(() => console.log("Erro na busca"));
    };

    return (
        <div className="container">
            <h1>Listar Usuário por ID</h1>

            <div className="mb-3 row">
                <div className="col-md-6">
                    <label htmlFor="id" className="form-label">
                        ID do Usuário:
                    </label>

                    <input
                        type="text"
                        id="id"
                        name="id"
                        placeholder="Preencha o id"
                        value={id}
                        className="form-control mb-3"
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>
            </div>

            <button
                className="btn btn-primary"
                onClick={fetchCliente}
            >
                Buscar Usuário
            </button>

            <h2 className="mt-5">Dados do Usuário</h2>

            {cliente && (
                <div className="list-group">
                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-3">
                                <strong>Nome:</strong>
                            </div>
                            <div className="col">
                                {cliente.name}
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-3">
                                <strong>E-mail:</strong>
                            </div>
                            <div className="col">
                                {cliente.email}
                            </div>
                        </div>
                    </div>

                    <div className="list-group-item">
                        <div className="row">
                            <div className="col-3">
                                <strong>CPF:</strong>
                            </div>
                            <div className="col">
                                {cliente.cpf}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}