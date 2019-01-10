import Theme from './Theme';
import * as chai from 'chai';

const expect = chai.expect;

describe('Theme', () => {
  describe('Instantiation', () => {
    const element = document.createElement('div');
    const date = new Date();

    it('should not throw an error', () => {
      expect(() => new Theme(date, element)).not.to.throw();
    });
  });

  describe('When day time', () => {
    const date = new Date(2019, 1, 1, 9);
    
    describe('Instantiation', () => {
      const element = document.createElement('div');     
      new Theme(date, element);
      
      it('should append the day class to the element', () => {
        expect(element.classList.contains('day')).to.eq(true);
      });
      
      it('should not append the night class to the element', () => {
        expect(element.classList.contains('night')).to.eq(false);
      });
    });
    
    describe('#toggleTheme', () => {
      const element = document.createElement('div');     
      const theme = new Theme(date, element);
      theme.toggleTheme();

      it('should not append the day class to the element', () => {
        expect(element.classList.contains('day')).to.eq(false);
      });
  
      it('should add the night class to the element', () => {
        expect(element.classList.contains('night')).to.eq(true);
      });
    });
  });

  describe('When night time', () => {
    const date = new Date(2019, 1, 1, 21);
    
    describe('Instantiation', () => {
      const element = document.createElement('div');     
      new Theme(date, element);
      
      it('should not append the day class to the element', () => {
        expect(element.classList.contains('day')).to.eq(false);
      });
      
      it('should append the night class to the element', () => {
        expect(element.classList.contains('night')).to.eq(true);
      });
    });
    
    describe('#toggleTheme', () => {
      const element = document.createElement('div');     
      const theme = new Theme(date, element);
      theme.toggleTheme();

      it('should append the day class to the element', () => {
        expect(element.classList.contains('day')).to.eq(true);
      });
  
      it('should remove the night class to the element', () => {
        expect(element.classList.contains('night')).to.eq(false);
      });
    });
  });
});
