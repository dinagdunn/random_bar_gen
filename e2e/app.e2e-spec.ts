import { RetrogenPage } from './app.po';

describe('retrogen App', () => {
  let page: RetrogenPage;

  beforeEach(() => {
    page = new RetrogenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
