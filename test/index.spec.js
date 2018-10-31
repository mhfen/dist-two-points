import distanceBetweenPoints from '~/src/index';

describe('Distance Between Points', () => {
  it('should return the distance between two points', () => {
    const dist = distanceBetweenPoints(37.4219752, -122.084076, 37.3348136, -122.0091032);

    expect(dist).toEqual(11739.07);
  });

  it('should return 0 for the same point', () => {
    const dist = distanceBetweenPoints(37.4219752, -122.084076, 37.4219752, -122.084076);

    expect(dist).toEqual(0);
  });
});
