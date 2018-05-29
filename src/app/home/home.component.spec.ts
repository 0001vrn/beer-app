import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home.module';
import { BeerService } from '../shared';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomHttpService } from '../core/http/custom-http.service';
import { UrlProviderService } from '../core/helper/url-provider.service';

const beer = '[{"id":"xbn6X9","name":"2XIBA","nameDisplay":"2XIBA","description":"A dark, malty India Black Ale with a huge hop profile presenting itself through roasted malts. We brewed 2XIBA with epically dark muscovado sugar which imparts some color and residual sugar while helping the ale yeast achieve 8.0% abv. Fans of our Iniquity Imperial Black Ale will no doubt be reminded of the critically lauded beer in the fall seasonal 2XIBA. We reimagined a favorite retired beer, creating a perfect addition to our seasonal 2X series lineup. Autumn will be a little darker this year!","abv":"8","glasswareId":1,"availableId":7,"styleId":41,"isOrganic":"N","labels":{"icon":"https://s3.amazonaws.com/brewerydbapi/beer/xbn6X9/upload_i7QWM4-icon.png","medium":"https://s3.amazonaws.com/brewerydbapi/beer/xbn6X9/upload_i7QWM4-medium.png","large":"https://s3.amazonaws.com/brewerydbapi/beer/xbn6X9/upload_i7QWM4-large.png"},"status":"verified","statusDisplay":"Verified","foodPairings":"cheddar or derby cheeses, steaks, burgers or bread pudding","createDate":"2015-08-23 13:09:44","updateDate":"2016-01-12 16:08:18","glass":{"id":1,"name":"Flute","createDate":"2012-01-03 02:41:33"},"available":{"id":7,"name":"Fall","description":"Available during the fall months."},"style":{"id":41,"categoryId":3,"category":{"id":3,"name":"North American Origin Ales","createDate":"2012-03-21 20:06:45"},"name":"American-Style Black Ale","shortName":"Black Ale","description":"American-style Black Ales are very dark to black and perceived to have medium high to high hop bitterness, flavor and aroma with medium-high alcohol content, balanced with a medium body. Fruity, floral and herbal character from hops of all origins may contribute character. The style is further characterized by a balanced and moderate degree of caramel malt and dark roasted malt flavor and aroma. High astringency and high degree of burnt roast malt character should be absent.","ibuMin":"50","ibuMax":"70","abvMin":"6","abvMax":"7.5","srmMin":"35","srmMax":"35","ogMin":"1.056","fgMin":"1.012","fgMax":"1.018","createDate":"2012-03-21 20:06:46","updateDate":"2015-04-07 15:28:36"},"breweries":[{"id":"x8kqVp","name":"Southern Tier Brewing Company","nameShortDisplay":"Southern Tier","description":"Southern Tier Brewing Company was founded in 2004 by Phineas DeMink and Allen Yahn with the vision of bringing small batch brewing back to a region rich in brewing tradition. In 2003 Skip and Phin purchased the defunct Old Saddle Back Brewing Co. in Pittsfield, Massachusetts. All the equipment was removed and brought back to Lakewood, New York and set up at its new 10,000 square foot home, The Southern Tier Brewing Company. The Brewery began operations in February 2004 distributing regionally. By 2005 sales covered the majority of the New York State and the eastern half of Pennsylvania. In the beginning their two Flagship brands were a Pilsner and Mild Ale. Oh yeah they also brewed IPA! As it turned out the flagships were a flop and the IPA was a huge success. They next launched a line of seasonal beers which have gained great success. Since the beginning, Southern Tier has experienced steady growth, currently distributing to over 25% of the United States. Multiple expansions have been made to keep up with demand and the brewery continues to be innovative by producing new products.  Keep a look out for new products coming to stores near you.","website":"http://www.southerntierbrewing.com/","established":"2002","isOrganic":"N","images":{"icon":"https://s3.amazonaws.com/brewerydbapi/brewery/x8kqVp/upload_4gTXFP-icon.png","medium":"https://s3.amazonaws.com/brewerydbapi/brewery/x8kqVp/upload_4gTXFP-medium.png","large":"https://s3.amazonaws.com/brewerydbapi/brewery/x8kqVp/upload_4gTXFP-large.png","squareMedium":"https://s3.amazonaws.com/brewerydbapi/brewery/x8kqVp/upload_4gTXFP-squareMedium.png","squareLarge":"https://s3.amazonaws.com/brewerydbapi/brewery/x8kqVp/upload_4gTXFP-squareLarge.png"},"status":"verified","statusDisplay":"Verified","createDate":"2012-01-03 02:42:08","updateDate":"2015-12-22 14:58:38","isMassOwned":"N","brandClassification":"craft","locations":[{"id":"nUT6v5","name":"Main Brewery","streetAddress":"2072 Stoneman Circle","locality":"Lakewood","region":"New York","postalCode":"14750","phone":"716-763-5479","website":"http://www.southerntierbrewing.com/","latitude":42.1008305,"longitude":-79.3356897,"isPrimary":"Y","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"micro","locationTypeDisplay":"Micro Brewery","countryIsoCode":"US","yearOpened":"2002","status":"verified","statusDisplay":"Verified","createDate":"2012-01-03 02:42:08","updateDate":"2014-10-27 14:23:02","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}},{"id":"OJrSkt","name":"Southern Tier Brewing Company-Pittsburgh","streetAddress":"316 N Shore Dr.","locality":"Pittsburgh","region":"Pennsylvania","postalCode":"15212","phone":"(412) 301-2337","website":"http://www.stbcbeer.com/capabilities-view/about-stbc-pittsburgh/","latitude":40.4463787,"longitude":-80.0104128,"isPrimary":"N","inPlanning":"N","isClosed":"N","openToPublic":"Y","locationType":"brewpub","locationTypeDisplay":"Brewpub","countryIsoCode":"US","yearOpened":"2016","status":"verified","statusDisplay":"Verified","createDate":"2017-08-09 00:10:10","updateDate":"2018-04-10 14:11:48","country":{"isoCode":"US","name":"UNITED STATES","displayName":"United States","isoThree":"USA","numberCode":840,"createDate":"2012-01-03 02:41:33"}}]}]}]';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      providers:[ Ng4LoadingSpinnerService, BeerService, CustomHttpService, UrlProviderService ],
      imports:[HomeModule, BrowserAnimationsModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onDialogHide()', () => {
    it('to be defined', () => {
      expect(component.onDialogHide).toBeDefined();
    });

    it('set selectedBeer to null', () => {
      component.onDialogHide();
      expect(component.selectedBeer).toBeNull();
    });
  });

  describe('selectBeer()', () => {
    it('to be defined', () => {
      expect(component.selectBeer).toBeDefined();
    });

    it('set selectedBeer to beer', () => {
      component.selectBeer(new MouseEvent('mouse'), JSON.parse(beer));
      expect(component.displayDialog).toBeTruthy();
      expect(component.selectedBeer).not.toBeNull();
    });
  });
});
