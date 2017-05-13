import { Demoapp2Page } from './app.po';

describe('demoapp2 App', () => {
  let page: Demoapp2Page;

  beforeEach(() => {
    page = new Demoapp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
