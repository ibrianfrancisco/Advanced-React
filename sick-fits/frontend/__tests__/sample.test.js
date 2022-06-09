function add(a, b) {
  return a + b;
}

// Test block
describe('Sample test 101', () => {
  // Can contain multiple tests
  it('works as expected', () => {
    // we run one or many expect statements to see if the test(s) will pass
    expect(1).toEqual(1);
    const age = 100;
    expect(age).toEqual(100);
  });
  it('runs the add function properly', () => {
    expect(add(1, 2)).toBeGreaterThanOrEqual(3);
  });
});
