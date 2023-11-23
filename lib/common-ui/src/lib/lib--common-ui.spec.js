import { render } from '@testing-library/react';
import LibCommonUi from './lib--common-ui';
describe('LibCommonUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LibCommonUi />);
    expect(baseElement).toBeTruthy();
  });
});
