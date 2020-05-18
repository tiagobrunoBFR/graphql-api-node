const UserRepository = require('../../../src/repositories/UserRepository')

let user_id = null

describe('Repository User', () => {

  it('Register user', async () => {

    const request = {
      data: {
        name: 'tiago',
        email: 'tiago@email.com',
        password: '123456'
      }

    }

    const user = await UserRepository.store(request)
    user_id = user.id
    expect(user.email).toBe('tiago@email.com')

  })

  it('Update user', async () => {

    const request = {
      email: 'update@email.com',
      name: 'new update'
    }

    return await UserRepository.update(user_id, request)
      .then((resp) => {

        expect(resp.email).toEqual(request.email)

      })
  })

  it('Find user by id', async () => {

    return await UserRepository.show(user_id).then((resp) => {
      expect(resp.id).toEqual(user_id)
    })

  })

  it('List of all users', async () => {

    return await UserRepository.index().then((resp) => {

      expect(resp.length).toBeGreaterThan(0)

    })

  })

  it('Delete user by id', async () => {


    await UserRepository.destroy(user_id)

    const user = await UserRepository.show(user_id)

    expect(user).toEqual(null)

  })

})