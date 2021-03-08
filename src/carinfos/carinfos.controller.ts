import { Body, Controller, Get, Param, Post, Put  } from '@nestjs/common';
import * as initialCarInfos from "./carinfos.json"

interface CarInfo {
    car_id: string
    driver: string
  }

@Controller('carinfos')
export class CarinfosController {
        
    private readonly carinfos: CarInfo[] = initialCarInfos;


    @Get()
    findAll(): CarInfo[] {
        return this.carinfos;
    }

    @Post()
    create(@Body() carinfo:CarInfo){
        this.carinfos.push(carinfo)

    }

    @Put()
    update(@Body() body:{n:number}){
        let i = body.n
        let carinfo = this.carinfos[i]
        this.carinfos[i]= {... carinfo}
    }
    
    @Get(":id")
    getOneCarInfo(@Param("id") id:number): CarInfo {
        return this.carinfos[id]
    }
}


