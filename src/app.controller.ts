import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('/browser')
  async getHello(@Res() response) {
    try {
      let data = await this.appService.getBrowser
      return response.status(HttpStatus.OK).json({
        "success": true,
        "data": data,
        "reason": ""
      })
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        "success": true,
        "data": {},
        "reason": "Invalid Params. Try again later"
      })
    }
  }

  @Get('/data/:text')
  async getData(@Res() response,@Param('text') text:string) {
    try {
      let data = await this.appService.getData(text)
      return response.status(HttpStatus.OK).json({
        "success": true,
        "data": data,
        "reason": ""
      })
    } catch (err: any) {
      console.log(err)
      return response.status(HttpStatus.BAD_REQUEST).json({
        "success": true,
        "data": {},
        "reason": "Invalid Params. Try again later"
      })
    }
  }
  @Post('/add')
  async addBrowserData(@Res() response, @Body() body: any) {
    try {
      let data = await this.appService.addBrowser(body)
      return response.status(HttpStatus.OK).json({
        "success": true,
        "data": data,
        "reason": ""
      })
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        "success": true,
        "data": {},
        "reason": "Invalid Params. Try again later"
      })
    }
  }

  @Delete('/delete')
  async deleteBrowserData(@Res() response) {
    try {
      let data = await this.appService.deleteBrowser()
      return response.status(HttpStatus.OK).json({
        "success": true,
        "data": data,
        "reason": ""
      })
    } catch (err: any) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        "success": true,
        "data": {},
        "reason": "Invalid Params. Try again later"
      })
    }
  }
}
