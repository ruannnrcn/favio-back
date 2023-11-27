import { test } from '@japa/runner'

test.group('Favoritos delete favorito', () => {
  test('remove favorito existente', async ({ client }) => {
    const response = await client.delete('/favoritos/1')

    response.assertStatus(204)
  })
  test('remove favorito nao existente', async ({ client }) => {
    const response = await client.delete('/favoritos/10')

    response.assertStatus(404)
  })
})
