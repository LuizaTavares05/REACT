import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

export default function Cores() {
    const cores = [
        "#FF1493",
        "#48D1CC",
        "#FF00FF",
        "#008B8B"
    ];

    const [indice, setIndice] = useState(0);

    useEffect(() => {
        document.body.style.backgroundColor = cores[indice];

        return () => {
            document.body.style.backgroundColor = "";
        };
    }, [indice]);

    const trocarCor = () => {
        if (indice === cores.length - 1) {
            setIndice(0);
        } else {
            setIndice(indice + 1);
        }
    };

    return (
        <div className="position-relative vh-100">
            <button
                className="btn btn-primary position-absolute top-50 start-50 translate-middle"
                onClick={trocarCor}
            >
                {cores[indice]}
            </button>
        </div>
    );
}