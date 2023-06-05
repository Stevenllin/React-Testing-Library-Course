import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}


describe("FollowersList", () => {
  beforeEach(() => {
    jest.mock("../../../__mocks__/axios")
  })

  beforeAll(() => {
    console.log('Running before all tests')
  })

  afterEach(() => {
    console.log('Running after each test')
  })

  afterAll(() => {
    console.log('Running after all tests')
  })

  test('should render follower item', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-item-0');
    screen.debug()
    expect(followerDivElement).toBeInTheDocument();
  });

  // test('should render multiple follower items', async () => {
  //   render(<MockFollowersList />);
  //   const followerDivElements = await screen.findAllByTestId(/follower-item/i);
  //   expect(followerDivElements.length).toBe(5);
  // });
})
