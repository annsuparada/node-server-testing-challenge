const Friends = require('./friends-helper.js');
const db = require('../data/db-config.js');

describe('friends model', () => {
  beforeEach(async () => {
    await db('friends').truncate();
  });

  it('should set environment to testing', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });


  describe('insert()', () => {
    it('should insert friends into db', async () => {
       await Friends.insert({ name: 'Ann' });
       await Friends.insert({ name: 'Richard' });

        let friends = await db('friends');
        expect(friends).toHaveLength(2);
    })

    it('should insert friends into db', async () => {
        const [id] = await Friends.insert({ name: "Ann"});

        let friend = await db('friends')
            .where({ id })
            .first();
        expect(friend.name).toBe('Ann');
    })
  })

  describe('remove()', () => {
    it('should remove friends into db', async () => {
       await Friends.remove({ name: 'Ann' });
       await Friends.remove({ name: 'Richard' });

        let friends = await db('friends');
        expect(friends).toHaveLength(0);
    })

    it('should remove friends by id', async () => {
      const friend1 = { name: 'Ann'}
      const friend2 = { name: 'Richard'}

      await Friends.insert(friend1)
      await Friends.insert(friend2)

      await Friends.remove(1)
      let removeFriends = await Friends.remove(1)
      expect(removeFriends).toBeFalsy();
    })
  })
});
