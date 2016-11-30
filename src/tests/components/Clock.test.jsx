var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');
describe('Clock', () => {
  it('should exist', () => {
    expect(Clock).toExist();
  });

  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      var expectedText = '01:02';
      expect(actualText).toBe(expectedText);
    });
  });
});

describe('formatSeconds', () => {
  it('should format seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 615;
    var expected = '10:15';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

  it('should format seconds min/sec are less than 10', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 61;
    var expected = '01:01';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

  it('should work < 60 seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 58;
    var expected = '00:58';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });

  it('should work < 10 seconds', () => {
    var clock = TestUtils.renderIntoDocument(<Clock />);
    var seconds = 8;
    var expected = '00:08';
    var actual = clock.formatSeconds(seconds);

    expect(actual).toBe(expected);
  });
})