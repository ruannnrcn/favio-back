import { test } from '@japa/runner'

test('display welcome page', async ({ client }) => {
  const response = await client.get('/')

  response.assertStatus(200)
  response.assertBodyContains({ app: 'favio-back' })
})
// test('nome do app', async({client})=> {
//   const request= await client.get('/')
//   request.assertStatus(200)
//   request.assertBodyContains({app:'favio-back'})
// });
