import { Desafio2Page } from './app.po';

describe('desafio2 App', function() {
  let page: Desafio2Page;

  beforeEach(() => {
    page = new Desafio2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
