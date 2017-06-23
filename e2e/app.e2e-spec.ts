import {NgRedPage} from "./app.po";

describe('ng-red App', () => {
  let page: NgRedPage;

  beforeEach(() => {
    page = new NgRedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
