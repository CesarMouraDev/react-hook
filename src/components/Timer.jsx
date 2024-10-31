import { useEffect, useState } from 'react';

function Timer() {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [dias, setDias] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // Estado para controlar o início do temporizador

    useEffect(() => {
        let interval;
        if (isRunning) {
            interval = setInterval(() => {
                setSegundos((prevSegundos) => {
                    if (prevSegundos === 59) {
                        setMinutos((prevMinutos) => {
                            if (prevMinutos === 59) {
                                setHoras((prevHoras) => {
                                    if (prevHoras === 23) {
                                        setDias((prevDias) => prevDias + 1); // Incrementa dias se horas chegarem a 23
                                        return 0; // Reseta horas para 0
                                    }
                                    return prevHoras + 1; // Incrementa horas
                                });
                                return 0; // Reseta minutos para 0
                            }
                            return prevMinutos + 1; // Incrementa minutos
                        });
                        return 0; // Reseta segundos para 0
                    } else {
                        return prevSegundos + 1; // Incrementa segundos
                    }
                });
            }, 1000); // Intervalo de 1 segundo
        }

        return () => clearInterval(interval); // Limpeza do intervalo ao desmontar o componente
    }, [isRunning]); // O efeito depende de isRunning

    const handleStart = () => {
        setIsRunning(true); // Inicia o temporizador ao clicar no botão
    };

    const handlePause = () => {
        setIsRunning((prev) => !prev); // Alterna entre iniciar e pausar o temporizador
    };

    const handleReset = () => {
        setIsRunning(false); // Para o temporizador
        setSegundos(0); // Reseta segundos
        setMinutos(0); // Reseta minutos
        setHoras(0); // Reseta horas
        setDias(0); // Reseta dias
    };

    return (
        <div>
            <h1>
                {String(dias).padStart(2, '0')}:
                {String(horas).padStart(2, '0')}:
                {String(minutos).padStart(2, '0')}:
                {String(segundos).padStart(2, '0')}
            </h1>
            <button onClick={handleStart}>{isRunning ? 'Continuar' : 'Iniciar'}</button>
            <button onClick={handlePause}>{isRunning ? 'Pausar' : 'Retomar'}</button>
            <button onClick={handleReset}>Resetar Temporizador</button>
        </div>
    );
}

export default Timer;
