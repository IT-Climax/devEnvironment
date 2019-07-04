import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe('Our first test', ()=>{
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say Hello!', () => {
    const index = fs.readFileSync('./src/index.html', "UTF-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementByTagName('h1')[0];
      expect(h1.innerHtml).to.equal('Hello!');
      // done();
      window.close();
    });
  })
})
