module.exports= {

     smallCar: {
        engineSize: 4,
        fuelType: 'diesel',
    },
    
    calculateVehicleRating: function(vehicle) {
        let rating =0;
        switch (smallCar.engineSize) {
            case 1:
            case 2:
            case 3:
            case 4:
                rating: 8;
                break;
            case 5:
            case 6:
            case 7:
            case 8: 
                rating: 5;
                break;
            default: 
        }

        switch (smallCar.fuelType){
            case diesel:
                rating: rating+2; 
                break;
            case regular:
        }
        return rating;
        
    },
};