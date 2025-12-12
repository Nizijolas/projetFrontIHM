import { PlayerInfo } from './player-info';

describe('PlayerInfo', () => {
  it('should create an instance', () => {
    expect(new PlayerInfo('Name', 'src', 'bio', 'Expert', 'Grenoble', 30, 5, 10)).toBeTruthy();
  });
});
