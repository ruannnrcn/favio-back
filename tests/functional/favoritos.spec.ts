import { test } from '@japa/runner'

const favoritos = [{ id: 1, nome: 'Google', url: 'http://www.google.com', importante: true }]

test('display favoritos', async ({ client }) => {
  const response = await client.get('/favoritos')

  response.assertStatus(200)
  response.assertBodyContains(favoritos)
})

test('display favoritos by id', async ({ client }) => {
  const response = await client.get('/favoritos/1')

  response.assertStatus(200)
  response.assertBodyContains(favoritos[0])
})

// test('display favoritos by nome', async ({ client }) => {
//   const response = await client.get('/favoritos&nome=google')

//   response.assertStatus(200)
//   response.assertBodyContains({ nome: 'google' })
// })

test('adiciona favorito', async ({ client }) => {
  const response = await client.post('/favoritos').form({
    nome: 'IFRN',
    url: 'http://www.ifrn.edu.br',
    importante: true,
  })

  response.assertStatus(201)
  response.assertBodyContains({ nome: 'IFRN' })
})
