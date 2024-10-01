import { SequelizeModule } from "@nestjs/sequelize";
import { BrowserModel } from "./model/browser.model";
import { AppService } from "./app.service";
import { AppController } from "./app.controller";
import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

@Module({
    imports:[HttpModule.register({
        timeout: 30000,
        maxRedirects: 7,
      }),SequelizeModule.forFeature([BrowserModel])],
    providers:[AppService],
    controllers:[AppController]
})
export class ModelsModule{}