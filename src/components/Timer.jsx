    import { useState, useEffect } from "react";


    const Timer = () => {
        const [segundos, setSegundos] = useState(0);
        const [minutos, setMinutos] = useState(0);

        //setInterval, setTimeout
        useEffect(() => {
            const intervalId = setInterval(() => {
                setSegundos((prevSegundos) => {
                    if (prevSegundos + 1 === 60) {
                        setMinutos((prevMinutos) => prevMinutos + 1); 
                        return 0; 
                    };
                    return prevSegundos + 1; 
                });
            }, 5);
            return () => clearInterval(intervalId)
        }, []);
    //limpeza de estado


        return <div>
            <h2>Timer {minutos} minutos, {segundos} segundos</h2>
            
        </div>;
    };

    export default Timer;
