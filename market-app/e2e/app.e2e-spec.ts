import { MarketAppPage } from './app.po';

describe('market-app App', function() {
  let page: MarketAppPage;

  beforeEach(() => {
    page = new MarketAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
