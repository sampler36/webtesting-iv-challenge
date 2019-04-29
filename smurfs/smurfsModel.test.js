const db = require('../data/dbConfig');
const smurf = require('./smurfsModel')

describe('smurf model', () => {
    beforeEach(async () => {
        await db('smurfs').truncate();
    })
    describe('insert()', () => {
        it('should insert the provided smurf into the db', async () => {
            await smurf.insert({name:'gagamel'});
            await smurf.insert({name:'brainy'});

            const smurfs = await db('smurfs')
            expect(smurfs).toHaveLength(2);
        })
        it('should insert the provided smurfs into db', async () => {
            let smurfee = await smurf.insert({name:'gagamel'})
            expect(smurfee.name).toBe('gagamel');

            smurfee = await smurf.insert({name:'antonio'})
            expect(smurfee.name).toBe('antonio')
        })

    })
    describe('delete', () => {
        afterEach(async () => {
            await db('smurfs').truncate();
    });
		it('should delete the given smurf out the db', async () => {
            const smurfee = await smurf.insert({ name: 'papa' });
               // removes the added smurf 
            const deleteSmurf = await smurf.remove(1);
            
          //shows all the left out  smurfs which is 0 
            const smurflist = await db('smurfs');
           
             //count the number of smurfs and calculate the length
			expect(smurflist).toHaveLength(0);
		});

});

})