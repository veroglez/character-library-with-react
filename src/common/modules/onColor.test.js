import onColor from './onColor';

describe('<onColor>', () => {
  it('when {Alien}', () => {
    expect(onColor('Alien')).toEqual('green');
  });

  it('when {Humanoid}', () => {
    expect(onColor('Humanoid')).toEqual('yellow');
  });

  it('when {Human}', () => {
    expect(onColor('Human')).toEqual('orange');
  });
});
