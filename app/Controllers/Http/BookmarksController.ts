import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class BookmarksController {
  public async index({}: HttpContextContract) {
    return [{ id: 0, nome: 'bookmark', url: 'bookmark.com', importante: true }]
  }

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
