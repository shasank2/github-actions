import { User } from "../../src/entities"
import { render, screen } from '@testing-library/react';
import UserAccount from '../../src/components/UserAccount'

describe('UserAccount', () => {
  it('should render user name', () => {
    const user: User = { id: 23, name: 'shasank', isAdmin: false }
    
    render(<UserAccount user={user} /> )

    expect(screen.getByText(user.name)).toBeInTheDocument();
  })
})