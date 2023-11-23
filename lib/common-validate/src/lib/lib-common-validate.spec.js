import { render } from '@testing-library/react';
import LibCommonValidate from './lib-common-validate';
describe('LibCommonValidate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibCommonValidate />);
    expect(baseElement).toBeTruthy();
  });
});
