import { DinalIntraWebFrontPage } from './app.po';

describe('dinal-intra-web-front App', function() {
  let page: DinalIntraWebFrontPage;

  beforeEach(() => {
    page = new DinalIntraWebFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
