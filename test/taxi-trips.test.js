let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex-coder:pg123@localhost:5432/txidb';

const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});

describe('Taxi Trips', function () {

    beforeEach(async function () {
        await pool.query(`delete from region`)
    });



    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);
        await pool.query("insert into region(id, name) values(1, 'Durban')")
        await pool.query("insert into region(id, name) values(2, 'Cape Town')");
        await pool.query("insert into region(id, name) values(3, 'Gauteng')");
        let expected = 3
        let actual = await taxiTrips.findAllRegions()
        console.log(actual);
        console.log(expected);

        assert.equal(expected, actual.length);

    });

    // it('should find all the taxis for a region', async function () {
    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Durban'));
    //     assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Cape Town'));
    //     assert.deepStrictEqual([], taxiTrips.findTaxisForRegion('Gauteng'));

    // })

    // it('should find all the trips for a reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('...'));
    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegNumber('***'));

    // });

    // it('should find the total number of trips by region', async function () {

    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Cape Town').length);
    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);
    //     assert.deepStrictEqual([], taxiTrips.findTripsByRegion('Gauteng').length);

    // });

    // it('find the total income for a given reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('...').length);
    //     assert.deepStrictEqual(0, taxiTrips.findIncomeByRegNumber('***').length);

    // });

    // it('find the total income for each taxi', async function () {

    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual([{}, {}, {}], taxiTrips.findTotalIncomePerTaxi());

    // });

    // it('find the total income for all the taxis', async function () {
    //     const taxiTrips = TaxiTrips(pool);
    //     assert.deepStrictEqual(0.00, taxiTrips.findTotalIncome());
    // });


    after(function () {
        pool.end();
    });

});