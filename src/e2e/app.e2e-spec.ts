import { Ang2FireMockdrilPage } from './app.po';

describe('ang2-fire-mockdril App', () => {
  let page: Ang2FireMockdrilPage;

  beforeEach(() => {
    page = new Ang2FireMockdrilPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
