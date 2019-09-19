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

        let hobbit = await db('friends')
            .where({ id })
            .first();
        expect(hobbit.name).toBe('Ann');
    })
})
});
