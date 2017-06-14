import { AnofetAppPage } from './app.po';

describe('anofet-app App', () => {
  let page: AnofetAppPage;

  beforeEach(() => {
    page = new AnofetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
