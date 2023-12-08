import { test } from '@japa/runner'
// node ace make:test functional <nome-do-teste>
test.group('List favoritos', () => {
  test('exibir favoritos', async ({client})=>{
    const resposta=await client.get('/favoritos')
    resposta.assertStatus(200)
    resposta.assertBodyContains([])
  })
  //TDD
  test('exibir favorito com id', async ({client})=>{
    const resposta=await client.get('/favoritos/1')
    resposta.assertStatus(200)
    resposta.assertBodyContains({id:1})
  })

  test('favorito nao encontrado', async ({client})=>{
    const resposta=await client.get('/favoritos/idnaoexiste')
    resposta.assertStatus(404)
  })
})
