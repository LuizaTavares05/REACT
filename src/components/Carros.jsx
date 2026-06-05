import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function Carros() {
    const carros = [
        { id: 1, marca: "Toyota", modelo: "Corolla" },
        { id: 2, marca: "Honda", modelo: "Civic" },
        { id: 3, marca: "Ford", modelo: "Mustang" },
        { id: 4, marca: "Chevrolet", modelo: "Camaro" },
        { id: 5, marca: "Nissan", modelo: "Altima" }
    ];

    const [marca, setMarca] = useState("");

    const carrosFiltrados = marca
        ? carros.filter((carro) => carro.marca === marca)
        : carros;

    return (
        <div className="container">
            <h1>Lista de Carros</h1>

            <div className="mb-3 col-md-4">
                <label className="form-label">
                    Filtrar por Marca:
                </label>

                <select
                    className="form-select"
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                >
                    <option value="">Todas</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Honda">Honda</option>
                    <option value="Ford">Ford</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Nissan">Nissan</option>
                </select>
            </div>

            <ul className="list-group">
                {carrosFiltrados.map((carro) => (
                    <li
                        key={carro.id}
                        className="list-group-item"
                    >
                        {carro.marca} - {carro.modelo}
                    </li>
                ))}
            </ul>
        </div>
    );
}