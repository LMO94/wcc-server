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

    update(id:string, driver:string): CarInfo[] {
        return this.updateCarInfoById(id,driver)
    }

    getCarInfoById(id:string): CarInfo {
        let value = null;
        this.carinfos.forEach((carinfo: CarInfo)=>{
            if (carinfo.car_id === id) {
                value = carinfo;
            }
        })
        return value;
    }

    updateCarInfoById(id:string, driver:string): CarInfo[] {
        this.carinfos.forEach((carinfo: CarInfo)=>{
            if (carinfo.car_id === id) {
                carinfo.driver = driver;
            }
        })
        return this.carinfos;
    }

}
