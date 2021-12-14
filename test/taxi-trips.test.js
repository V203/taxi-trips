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

    // beforeEach(async function () {
    //     await pool.query(`delete from region`)
    // });



    it.skip('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);
        let expected = 3
        let actual = await taxiTrips.findAllRegions()
        assert.equal(expected, actual.length);

    });

    // it('should find all the taxis for a region', async function () {
    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([],await taxiTrips.findTaxisForRegion('Durban'));
    //     assert.deepStrictEqual([],await taxiTrips.findTaxisForRegion('Cape Town'));
    //     assert.deepStrictEqual([],await taxiTrips.findTaxisForRegion('Gauteng'));

    // })

    // it('should find all the trips for a reg number', async function () {

    //     const taxiTrips = TaxiTrips(pool);

    //     assert.deepStrictEqual([],await taxiTrips.findTripsByRegNumber('...'));
    //     assert.deepStrictEqual([],await taxiTrips.findTripsByRegNumber('***'));

    // });

    it.skip('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(13, await taxiTrips.findTripsByRegion('Gauteng'));

    });

    it.skip('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual({sum: '756.00',trip_reg_number: 'ZN1111'}, await taxiTrips.findIncomeByRegNumber('ZN1111'));
        assert.deepStrictEqual({sum: '476.00',trip_reg_number: 'DZ1111'}, await taxiTrips.findIncomeByRegNumber('DZ1111'));

    });

    it.skip('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);

        let expected = [
            { sum: '651.00', trip_reg_number: 'CY5555' },
            { sum: '476.00', trip_reg_number: 'DZ1111' },
            { sum: '686.00', trip_reg_number: 'CJ2222' },
            { sum: '595.00', trip_reg_number: 'DH2222' },
            { sum: '763.00', trip_reg_number: 'CA1111' },
            { sum: '784.00', trip_reg_number: 'ZN5555' },
            { sum: '756.00', trip_reg_number: 'ZN1111' },
            { sum: '476.00', trip_reg_number: 'DD5555' },
            { sum: '756.00', trip_reg_number: 'ZN2222' }]

        assert.deepStrictEqual(expected, await taxiTrips.findTotalIncomePerTaxi());

    });

    it.skip('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(5943.00, parseFloat(await taxiTrips.findTotalIncome()));
    });

    it.skip('find the total trip count for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual(38, await taxiTrips.totalTripCount());
    });


    after(function () {
        pool.end();
    });

});