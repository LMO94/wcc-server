import { Body, Controller, Get, Param, Post, Put  } from '@nestjs/common';
import * as initialCarInfos from "./carinfos.json";
import {CarinfosService} from "./carinfos.service";

interface CarInfo {
    car_id: string
    driver: string
  }

@Controller('carinfos')
export class CarinfosController {
    constructor(private carinfosService: CarinfosService) {}
        
    //private readonly carinfos: CarInfo[] = initialCarInfos;


    @Get()
    findAll(): CarInfo[] {
        return this.carinfosService.findAll();
    }

    @Post()
    create(@Body() carinfo:CarInfo){
        this.carinfosService.create(carinfo)
        
    }

    @Put("/:id")
    update(@Param("id") id:string,@Body() body:{driver:string}):CarInfo {
        //let carInfo = this.carinfosService.getCarInfoById(id)
        this.carinfosService.update(id, body.driver)
        let carInfo = this.carinfosService.getCarInfoById(id)
        return carInfo
    }
    
    @Get("/:id")
    getOneCarInfo(@Param("id") id:string): CarInfo {
        let carInfo = this.carinfosService.getCarInfoById(id)
        console.log(carInfo)
        return carInfo
    }

}


