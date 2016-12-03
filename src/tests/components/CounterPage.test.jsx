var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CounterPage = require('CounterPage');

describe('CounterPage', () => {
  it('should exist', () => {
    expect(CounterPage).toExist();
  });

  describe('handleSetCountdown', () => {
    it('should set state to started and count down', (done) => {
      var countDown = TestUtils.renderIntoDocument(<CounterPage />);
      countDown.handleSetCountdown(10);
      expect(countDown.state.count).toBe(10);
      expect(countDown.state.countdownStatus).toBe('started');

      setTimeout(() => {
          expect(countDown.state.count).toBe(9);
          done();
      }, 1001);
    });

    it('should not become a negative count', (done) => {
      var countDown = TestUtils.renderIntoDocument(<CounterPage />);
      countDown.handleSetCountdown(1);

      setTimeout(() => {
          expect(countDown.state.count).toBeGreaterThanOrEqualTo(0);
          done();
      }, 3001);
    });

    it('should pause countdown on paused status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CounterPage />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('paused');
      setTimeout( () => {
        expect(countdown.state.count).toBe(3);
        expect(countdown.state.countdownStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('should stop and reset count on stopped status', (done) => {
      var countdown = TestUtils.renderIntoDocument(<CounterPage />);
      countdown.handleSetCountdown(3);
      countdown.handleStatusChange('stopped');
      setTimeout( () => {
        expect(countdown.state.count).toBe(0);
        expect(countdown.state.countdownStatus).toBe('stopped');
        done();
      }, 1001);
    });
  });
});
