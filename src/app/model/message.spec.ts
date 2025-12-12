import { Message } from './message';
import { PlayerInfo } from './player-info';

describe('Message', () => {
  it('should create an instance', () => {
    const dummyPlayer = new PlayerInfo('Test', 'src', 'bio', 'level', 'city', 25, 5, 1);
    expect(new Message('Test Message', dummyPlayer)).toBeTruthy();
  });
});
