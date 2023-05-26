import { useState } from "react";
import style from "../module/button.module.css"

export default function MeuContador(){

               //Variável de estado
    const [contador, setContador] = useState(0)
                          //Função que define o estado
    function aumentar(){
        setContador(contador + 1)
    }
    function diminuir(){
        setContador(contador - 1)
    }

    /* Renderiazr condicionalmente */
    if(contador < 0){
        return(
            <div>
                <h1>Meu Contador: {contador}</h1>
                <h1>Poxa você está negativa(o) hoje! </h1>
                <button className={style.myButton} onClick={diminuir}>diminuir</button>
                <button className={style.myButton} onClick={aumentar}>aumentar</button>

            </div>
        )
    }
    /* Renderiazr condicionalmente */


    return(
        <div>
            <h1  className="container">Meu Contador: {contador}</h1>
             {/* Renderiazr condicionalmente */}
             {contador >9 ? <h1>Tá entediada(o)?</h1> : null}
             <button className={style.myButton} onClick={diminuir}>diminuir</button>
            <button className={style.myButton} onClick={aumentar}>aumentar</button>

        </div>
    )
}


// Listas e Chaves

    

// Listas e Chaves
