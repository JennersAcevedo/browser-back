import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { BrowserModel } from './model/browser.model';
import { ModelsModule } from './models.module';

@Module({
  imports: [ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect:'postgres',
      host:'localhost',
      port:5432,
      username:'postgres',
      password:'1806',
      database:'test',
      models:[BrowserModel],
      autoLoadModels:true,
      synchronize:false,
    }),ModelsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
