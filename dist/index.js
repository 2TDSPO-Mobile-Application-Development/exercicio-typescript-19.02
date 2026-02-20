"use strict";
// https://whimsical.com/aula-19-02-2026-introducao-ao-typescript-78WUAi5YGbFCP8LeNFeYwi
Object.defineProperty(exports, "__esModule", { value: true });
// 4.2 - Crie o array de produtos
const produtos = [
    {
        id: 1,
        nome: "Samsung S24",
        preco: 5999.0,
        categoria: "Eletrônicos",
        emEstoque: true,
    },
    {
        id: 2,
        nome: "Astronauta Luminária",
        preco: 39.9,
        categoria: "Eletrônicos",
        emEstoque: false,
    },
    {
        id: 3,
        nome: "Camisa DryFit Nike",
        preco: 349.9,
        categoria: "Esportes",
        emEstoque: true,
    }
];
/* 4.3 - Crie a função exibirProduto
A função recebe um Produto e devolve uma string formatada.*/
function exibirProduto(produto) {
    // Formatar o preço no padrão brasileiro
    const precoFormatado = produto.preco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    // Define ícone e texto conforme disponibilidade
    const status = produto.emEstoque ? "✅ Disponível" : "❌ Indisponível";
    // Retorna a string final
    return `[${produto.categoria}] ${produto.nome} - ${precoFormatado} ${status}`;
}
/* 4.4 - Percorra o array com um loop
Use um for...of para percorrer cada produto e exibir no console. */
console.log("-=== PRODUTOS ===-\n");
for (const produto of produtos) {
    console.log(exibirProduto(produto));
}
//# sourceMappingURL=index.js.map