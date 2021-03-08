import { Injectable } from '@nestjs/common';

export interface Trip {
    location: string,
    car_id: string,
    duration: string
  }

  let initialTrips = [{ location: "Berne", 
                        car_id: "XDFSAD",
                        duration: "40min" 
                    }]


@Injectable()
export class TripsService {
    private readonly trips: Trip[] = initialTrips;

    findAll(): Trip[] {
        console.log(this.trips)
        return this.trips;
    }

    create(trip:Trip) {
        this.trips.push(trip)
    }

}
