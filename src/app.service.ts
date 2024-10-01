import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { BrowserModel } from './model/browser.model';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(BrowserModel)
    private browserModel: typeof BrowserModel,
    private readonly httpService: HttpService,
  ) { }
  getHello(): string {
    return 'Hello World!';
  }
  async addBrowser(body: any) {
 await this.browserModel.create({"title":body['title'],"created_date":new Date().toISOString(),"user_id":1})
  }
  async getBrowser() {
    let browserData = await this.browserModel.findAll();
    return browserData;
  }
  async getData(text: string) {
    let apikey = 'pLURtkhVrUXr3KG25Gy5IvzziV5OrZGa'
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${text}`
    let config = {
      headers: {
        "Accept": "application/json",

        "Content-Type": "application/json"
      },
      timeout: 9000
    }

    const data = await this.httpService.axiosRef.get(url, config).catch(err => console.log(err))
    let dataResponse = []
    if (data) {
      for await (const gif of data['data']['data']) {
        dataResponse.push({
          "data":gif['images']['original']['url']
        })
      }
    }
    await this.addBrowser({
      "title":text,
    })

    return dataResponse
  }
  async deleteBrowser(){
    await this.browserModel.truncate()
  }
}
