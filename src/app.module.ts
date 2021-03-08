import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TripsController } from './trips/trips.controller';
import { TripsService } from './trips/trips.service';

@Module({
  imports: [],
  controllers: [AppController, TripsController],
  providers: [AppService, TripsService],
})
export class AppModule {}
