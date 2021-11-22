module.exports = function TaxiTrips(pool){

    let findAllRegions = async ()=>{

        
      let results  = await pool.query(`Select id from region`);
        return results.rows
    }




return{
    findAllRegions

}
    
	
}