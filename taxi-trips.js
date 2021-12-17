module.exports = function TaxiTrips(pool) {

    let totalTripCount = async () => Number((await pool.query(`select count(*) from trip`)).rows[0]['count']);

    let findAllRegions = async () => (await pool.query(`Select id from region`)).rows;

    let findTaxisForRegion = async (region) => (await pool.query(`SELECT reg_number FROM taxi join region on region.id = taxi.taxi_region_id where region.name = '${region}'`)).rows;

    let findTripsByRegNumber = async (reg_number) => (await pool.query(`select * from trip where trip.trip_reg_number = '${reg_number}'`)).rows;

    let findTripsByRegion = async (region) => Number((await pool.query(`select count(*) from trip join region on region.id = trip.trip_region where '${region}' = region.name`)).rows[0]['count']);

    let findIncomeByRegNumber = async (par) => (await pool.query(`select trip_reg_number ,sum(fare_total) from trip where trip.trip_reg_number = '${par}' group by trip_reg_number`)).rows['0'];

    let findTotalIncomePerTaxi = async () => (await pool.query(`select  trip_reg_number,sum(fare_total) from trip group by trip_reg_number order by trip_reg_number desc`)).rows

    let findTotalIncome = async () => (await pool.query(`select sum(fare_total) from trip`)).rows[0]['sum'];

    let findTotalIncomeByRegion = async (region) => (await pool.query(`select sum(fare_total) from trip join region on region.id = trip.trip_region where region.name = '${region}' group by region.name`)).rows[0]["sum"];

    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    };
};