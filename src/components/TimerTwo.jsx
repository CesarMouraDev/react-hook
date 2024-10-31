import { useState, useEffect } from "react";

const TimerTwo = () => {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSegundos((prevSegundos) => {
                switch (prevSegundos) {
                    case 59:  // Quando os segundos chegam a 59
                        setSegundos(0); // Reinicia os segundos
                        setMinutos((prevMinutos) => {
                            switch (prevMinutos) {
                                case 59:  // Quando os minutos chegam a 59
                                    setHoras((prevHoras) => prevHoras + 1); // Incrementa as horas
                                    return 0; // Reinicia os minutos
                                default:
                                    return prevMinutos + 1; // Incrementa os minutos normalmente
                            }
                        });
                        break;
                    default:
                        return prevSegundos + 1; // Incrementa os segundos normalmente
                }
            });
        }, 100); // Executa a cada 1 segundo

        return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
    }, []);

    return (
        <div>
            <h2>Timer: {horas} hora(s), {minutos} minuto(s), {segundos} segundo(s)</h2>
        </div>
    );
};

export default TimerTwo;
