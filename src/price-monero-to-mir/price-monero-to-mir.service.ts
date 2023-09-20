import { Injectable } from '@nestjs/common';

import { Builder,By} from "selenium-webdriver";
import {Options} from 'selenium-webdriver/chrome.js';


@Injectable()
export class PriceMoneroToMirService {
    price: { amount: number; time: number; };
    constructor(){
        this.price={
            amount:10,
            time:+new Date
        }
    }
    async getPrice(){
        console.log(this.price.time);
        console.log(+new Date);

        if((+new Date) - this.price.time < 30000){
            return this.price.amount
        }
        
        let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions((new Options).addArguments('--headless=new'))
        .build();

        await driver.get('https://www.bestchange.ru/monero-to-mir.html');
        
        let priceXmr = await driver.findElement(By.xpath("//span[@title='Средний арифметический взвешенный курс']/span")).getText()

        await driver.quit()

        this.price.amount=priceXmr.replace(' ','');
        this.price.time= +new Date;
        console.log(priceXmr.replace(' ',''));
        return priceXmr.replace(' ','');
    }
}
