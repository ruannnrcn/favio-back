import { test } from '@japa/runner'

test.group('Favoritos edita favorito', () => {
  test('edita favorito com id', async ({ client }) => {
    const response = await client.put('/favoritos/1').json({
      nome: 'Google BR',
      url: 'https://www.google.com.br/',
      importante: true,
    })
    response.assertStatus(201)
    response.assertBodyContains({ nome: 'Google BR' })
  })
  test('edita favorito com id inexistente', async ({ client }) => {
    const response = await client.put('/favoritos/10').json({
      nome: 'Google BR',
      url: 'https://www.google.com.br/',
      importante: true,
    })
    response.assertStatus(404)
  })
})
