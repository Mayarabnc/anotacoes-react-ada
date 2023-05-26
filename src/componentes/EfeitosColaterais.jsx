import { useEffect } from "react"
import { useState } from "react"

const listaColaterial = [
    { id: "4", value: "Fruta" },
    { id: "5", value: "Legume" },
    { id: "6", value: "Carne" },

]

export default function EfeitosColaterais() {

    const [produtos, setProdutos] = useState(listaColaterial)
    const[pesquisa, setPesquisa] = useState("")



    
    useEffect(
        () => {                                 
            if(pesquisa){                       //Permite criar uma lista nova só com os elementos que eu quero
            const novaLista = listaColaterial.filter((item) => {
                return item.value.toLowerCase().includes(pesquisa.toLowerCase())
                       //Deixa o value com caracteres minúsculos e verifica se o valor dele estão incluidas na string que estou digitando(pesquisa)  
        })
        setProdutos(novaLista)
    } else {
        setProdutos(listaColaterial)
    }
}
, [pesquisa])

    return (
        <div>
            <h1>Efeitos colaterais</h1>
            <input
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="pesquise aqui" />
            {produtos.map((item) => {
                return(
                    <div key={item.id}>
                        <h4>{item.value}</h4>
                    </div>
                )
            })}
        </div>
    )
}