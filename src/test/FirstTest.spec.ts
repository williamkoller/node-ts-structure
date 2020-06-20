import { User } from '@models/User'

test('it shloud be ok', () =>{
    const user = new User()

    user.name = 'William'

    expect(user.name).toEqual('William')
})