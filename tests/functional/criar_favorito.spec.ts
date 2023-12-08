import { test } from '@japa/runner'

test.group('Criar favorito', () => {
  test('criar favorito', async ({client})=>{
    const resposta=await client.post('/favoritos').json(
      {nome:'IFRN',
      url:'www.ifrn.edu.br',
      importante:false
      })
    resposta.assertStatus(201)
    resposta.assertBodyContains({nome:"IFRN"})  
  })
  test('criar favorito com campo faltante')
})
