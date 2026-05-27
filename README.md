# Trabalho Prático - Semana 11

Nessa etapa, vamos evoluir o trabalho anterior, acrescentando a página de detalhes, conforme o  projeto escolhido. Imagine que a página principal (home-page) mostre um visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado pra a página de detalhes. A página de detalhe vai mostrar todas as informações sobre o item do seu projeto. seja esse item uma notícia, filme, receita, lugar turístico ou evento.

Vamos dar um exemplo, se você escolheu o Portal de notícias locais, então sua página principal (home-page) mostra todas as notícias. Ao clicar no titulo ou na imagem de uma notícia específica, você é direcionado para a página de detalhes que trará o texto completo da notícia, o autor e outros detalhes adicionais sobre aquela notícia. O mesmo vai acontecer para todos os demais tipos de projetos. 

IMPORTANTE: Assim como informado anteriormente, capriche na etapa pois você vai precisar dessa parte para as próximas semanas. 

## Informações Gerais

- Nome: Vinicius Eduardo de Souza Matos Silva
- Matricula: 911693

## Endpoint utilizado
/movie/popular

Também foi utilizado:
/search/movie para a pesquisa de filmes.

## Descrição do projeto

O projeto utiliza a API do The Movie DB (TMDB) para buscar e exibir filmes populares em cards. A aplicação faz uma requisição utilizando Fetch API, trata os dados recebidos em JSON e renderiza dinamicamente os filmes na tela. Também foi implementada uma funcionalidade de pesquisa por nome de filme.

## Funcionalidades

- Listagem de filmes populares
- Pesquisa por nome
- Exibição de poster
- Nota média
- Ano de lançamento
- Sinopse resumida
- Mensagem de erro/vazio

## Prints da aplicação

Adicione aqui:

- Print da lista de filmes
![alt text](public\img\lista.png)
- Print da pesquisa funcionando
![alt text](public\img\pesquisa.png)