import { Body, Controller, Get, Param, Post } from '@nestjs/common';

interface Trip {
    location: string,
    car_id: string,
    duration: string,
  }

 let initialTrips = [{ location: "Berne", 
                        car_id: "XDFSAD",
                        duration: "40min" }]

@Controller('trips')
export class TripsController {
    
    private readonly trips: Trip[] = initialTrips;


    @Get()
    findAll(): Trip[] {
        return this.trips;
    }

    @Post()
    create(@Body() trip:Trip){
        this.trips.push(trip)

    }
    
    @Get(":id")
    getOneTrip(@Param("id") id:number): Trip {
        return this.trips[id]
    }
}
