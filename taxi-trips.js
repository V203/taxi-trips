module.exports = function TaxiTrips(pool){

    let totalTripCount = async ()=>{
        let results = await pool.query(`select count(*) from trip`);
        return Number(results.rows[0]['count'])

    }

    let findAllRegions = async ()=>{
 
      let results  = await pool.query(`Select id from region`);
        return results.rows
    }

    let findTaxisForRegion = async (taxis)=>{
        results = await pool.query(`SELECT * FROM trip where region_id = `);
        return results.rows
    }

    let findTripsByRegNumber = async ()=>{
        let results  = await pool.query(``);

    }
    let findTripsByRegion = async (region)=>{
        let results = await pool.query(`select count(*) from trip join region on region.id = trip.trip_region where '${region}' = region.name`);
        return Number(results.rows[0]['count'])

    }
    let findIncomeByRegNumber = async (par)=>{
        let results = await pool.query(`select trip_reg_number ,sum(fare_total) from trip where trip.trip_reg_number = '${par}' group by trip_reg_number`);
        return results.rows['0']

    }

    let findTotalIncomePerTaxi = async ()=>{
        return (await pool.query(`select trip.trip_reg_number ,sum(fare_total) from trip group by trip_reg_number`)).rows;
    }

    let findTotalIncome = async ()=>{
        let results = await pool.query(`select sum(fare_total) from trip`);
        return results.rows[0]['sum']

    }

    let findTotalIncomeByRegion = async ()=>{

    }


return{
    totalTripCount,
    findAllRegions,
    findTaxisForRegion,
    findTripsByRegNumber,
    findTripsByRegion,
    findIncomeByRegNumber,
    findTotalIncomePerTaxi,
    findTotalIncome,
    findTotalIncomeByRegion

}
    
	
}