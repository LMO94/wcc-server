import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsController } from './trips/trips.controller';
import { TripsService } from './trips/trips.service';
import { CarinfosController } from './carinfos/carinfos.controller';
import { CarinfosService } from './carinfos/carinfos.service';

@Module({
  imports: [],
  controllers: [AppController, TripsController, CarinfosController],
  providers: [AppService, TripsService, CarinfosService],
})
export class AppModule {}
