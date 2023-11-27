/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
const favoritos = [{ id: 1, nome: 'Google', url: 'http://www.google.com', importante: true }]

Route.get('/', async () => {
  return { app: 'favio-back' }
})

Route.get('/favoritos', async () => {
  return favoritos
})
Route.get('/favoritos/:id', async ({ params }) => {
  // retorna o objeto caso exista, senao retornar objeto vazio {}
  //funcao callback
  // eslint-disable-next-line eqeqeq
  let favoritoEncontrado = favoritos.find((favorito) => favorito.id == params.id)
  if (favoritoEncontrado === undefined) return { msg: 'favorito nao encontrado' }
  return favoritoEncontrado
})
//Rota procura favorito pelo nome
Route.get('/favoritos/:nome', async ({ params }) => {
  return { id: 1, nome: params.nome, url: 'http://www.google.com', importante: true }
})

//Rota procura favorito pelo nome
Route.post('/favoritos', async ({ request, response }) => {
  const { nome, url, importante } = request.body()
  const newFavorito = { id: favoritos.length, nome, url, importante }
  favoritos.push(newFavorito)
  return response.status(201).send(newFavorito)
})
