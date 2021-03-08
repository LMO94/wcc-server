import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import * as initialTrips from "./trips.json"

interface Trip {
    location: string,
    car_id: string,
    duration: string,
  }


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

    @Put()
    update(@Body() body:{n:number}){
        let i = body.n
        let trip = this.trips[i]
        this.trips[i]= {... trip}
    }
    
    @Get(":id")
    getOneTrip(@Param("id") id:number): Trip {
        return this.trips[id]
    }
}
