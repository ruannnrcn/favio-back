import { test } from '@japa/runner'

test.group('Favoritos list', () => {
  test('display favoritos', async ({ client }) => {
    const response = await client.get('/favoritos')

    response.assertStatus(200)
  })

  test('display favoritos by id', async ({ client }) => {
    const response = await client.get('/favoritos/1')

    response.assertStatus(200)
  })
})
