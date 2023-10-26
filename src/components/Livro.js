import React from "react";

const Livro = ({livro}) => (
    <main className="princiapl">
        <div className="pag-livro">
            <h2>{livro.titulo}</h2>
            <div className="livro">
                <img
                src={"../imagens/capas/" + livro.id + ".jpg"}
                alt="Thumbnail da capa do livro..."
                />
                <ul>
                    <li>ISBN: {livro.isbn}</li>
                    <li>Ano: {livro.ano}</li>
                    <li>Paginas: {livro.paginas}</li>
                    <li>Preço: R${livro.preco}</li>
                </ul>
                <hr />
                <h3>Descrição do livro</h3>
                <p>{livro.descrição}</p>
            </div>
        </div>
    </main>
);

export default Livro;