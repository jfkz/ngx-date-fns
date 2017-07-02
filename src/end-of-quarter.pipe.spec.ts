import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { EndOfQuarterPipe } from './end-of-quarter.pipe';

describe('EndOfQuarterPipe', () => {
  var pipe: EndOfQuarterPipe;

  beforeEach(() => pipe = new EndOfQuarterPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, EndOfQuarterPipe.NO_ARGS_ERROR);
  });

  it('should return the end of quarter for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 8, 30, 23, 59, 59, 999));
  });
});
