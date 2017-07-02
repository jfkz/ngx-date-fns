import 'core-js';
import { expect } from 'chai';
import 'reflect-metadata';
import { EndOfWeekPipe } from './end-of-week.pipe';

describe('EndOfWeekPipe', () => {
  var pipe: EndOfWeekPipe;

  beforeEach(() => pipe = new EndOfWeekPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined))
        .to.throw(Error, EndOfWeekPipe.NO_ARGS_ERROR);
  });

  it('should return the end of a week for 2 September 2014 11:55:00', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date))
      .to.eql(new Date(2014, 8, 6, 23, 59 , 59, 999));
  });

  it('should return the end of week for 2 September 2014 11:55:00 if the week starts on Monday', () => {
    const date = new Date(2014, 8, 2, 11, 55, 0);
    expect(pipe.transform(date, {weekStartsOn: 1}))
      .to.eql(new Date(2014, 8, 7, 23, 59 , 59, 999));
  });
});
