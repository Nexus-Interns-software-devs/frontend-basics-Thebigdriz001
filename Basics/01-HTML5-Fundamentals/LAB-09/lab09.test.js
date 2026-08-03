const { getHtmlContent } = require('../../../tests/utils');

describe('Lab 09: Semantic About Me Page', () => {
  let html;
  
  beforeAll(() => {
    html = getHtmlContent('Basics/01-HTML5-Fundamentals/LAB-09/starter-code.html');
    document.body.innerHTML = html;
  });

  test('Page should have a <header> element', () => {
    const header = document.querySelector('header');
    expect(header).not.toBeNull("❌ We couldn't find a <header> element on your page.");
  });

  test('Page should have a <main> element', () => {
    const main = document.querySelector('main');
    expect(main).not.toBeNull("❌ We couldn't find a <main> element. All your primary content should be inside it.");
  });

  test('Header should contain a <nav> element', () => {
    const nav = document.querySelector('header nav');
    expect(nav).not.toBeNull("❌ Your <header> should contain a <nav> for your navigation links.");
  });

  test('Page should have a <footer> element', () => {
    const footer = document.querySelector('footer');
    expect(footer).not.toBeNull("❌ We couldn't find a <footer> element at the bottom of your page.");
  });
});
