import { useEffect, useState } from "react";


const ExemploUseEffect = () => {
    const [contador, setContador] = useState(0);
    useEffect(() => {
    document.title = `voce clicou ${contador} vezes`;
},[contador]);

    return <div>
    <h1>Você clicou {contador} vezes</h1>
    <button onClick={() => setContador(contador + 1)}>Clique aqui</button>
    </div>;
    
};

export default ExemploUseEffect;
