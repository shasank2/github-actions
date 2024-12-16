import { render, screen } from '@testing-library/react'
import ExpandableText from '../../src/components/ExpandableText'
import userEvent from '@testing-library/user-event'

describe('ExpandableText', () => {
  it('should render the full text if less than 255 characters', () => {
    const text = 'Less than 255 charcaters'
    render(<ExpandableText text={text} />)

    expect(screen.getByText(text)).toBeInTheDocument()
  })

  it('should truncate text if more than 255 characters', () => {
    const text = 'abc'.repeat(100)

    const truncatedText = text.substring(0, 255) + '...'
    render(<ExpandableText text={text} />)
    expect(screen.getByText(truncatedText)).toBeInTheDocument()

    const showMoreButton = screen.getByRole('button')
    expect(showMoreButton).toBeInTheDocument();
    expect(showMoreButton).toHaveTextContent(/more/i)
  })

  it('should show rest of the characters if clicked show more button', async () => {
    const text = 'abc'.repeat(100);

    render(<ExpandableText text={text} />);

    const showMoreButton = screen.getByRole('button');
    await userEvent.click(showMoreButton)

    expect(screen.getByText(text)).toBeInTheDocument();
    expect(showMoreButton).toHaveTextContent(/less/i);
  });
})