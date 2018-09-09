// power.pipe.spec.ts
import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe Test Suite', () => {
  it('create an instance Test Case', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });

  it('power pipe default test', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(5)).toBe(5);
  });

  it('power pipe test', () => {
    const pipe = new PowerPipe();
    expect(pipe.transform(5, 2)).toBe(25);
  });

});
