import { render, screen } from '@testing-library/react'
import TermsAndConditions from '../../src/components/TermsAndConditions'
import userEvent from '@testing-library/user-event'

describe('TermsAndConditions', () => {
  it('should render TOC Component', () => {
    render(<TermsAndConditions />)

    const tocComponent = screen.getByRole('heading')
    expect(tocComponent).toBeInTheDocument();
    expect(tocComponent).toHaveTextContent(/Terms & Conditions/i)

    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole('button', { name: /submit/i })
    expect(button).toBeInTheDocument();
    expect(button).toBeDisabled()
  })

  it('should enable button when the checkbox is checked',async () => {
    render(<TermsAndConditions />)

    const checkbox = screen.getByRole('checkbox');
    const user = userEvent.setup();
    await user.click(checkbox);

    expect(screen.getByRole('button')).toBeEnabled()
  })
})