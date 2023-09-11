import { Injectable } from '@nestjs/common';

import { Builder,By} from "selenium-webdriver";
import {Options} from 'selenium-webdriver/chrome.js';


@Injectable()
export class PriceMoneroToMirService {

    async getPrice(){
        let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions((new Options).addArguments('--headless=new'))
        .build();

        await driver.get('https://www.bestchange.ru/monero-to-mir.html');
        
        let priceXmr = await driver.findElement(By.xpath("//span[@title='Средний арифметический взвешенный курс']/span")).getText()

        await driver.quit()

        return priceXmr.replace(' ','');
    }
}
