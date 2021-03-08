import { Injectable } from '@nestjs/common';
import * as initialCarInfos from "./carinfos.json"

interface CarInfo {
    car_id: string
    driver: string
  }

@Injectable()
export class CarinfosService {
    private readonly carinfos: CarInfo[] = initialCarInfos;

    findAll(): CarInfo[] {
        console.log(this.carinfos)
        return this.carinfos;
    }

    create(carinfo:CarInfo) {
        this.carinfos.push(carinfo)
    }

}
