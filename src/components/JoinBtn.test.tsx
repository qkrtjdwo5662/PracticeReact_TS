import { render, screen } from '@testing-library/react';
import JoinBtn from './JoinBtn';

test('19살이면 회원가입 가능해요?', () => {
  render(<JoinBtn age={19}/>)
  const textEl = screen.getByText(/가입이 가능/);
  const btnEl = screen.getByRole('button');

  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeEnabled();
  expect(btnEl).toHaveStyle({backgroundColor:'orange'});
})

test('13살이면 회원가입 가능해요?', () => {
  render(<JoinBtn age={13}/>)
  const textEl = screen.getByText(/14세 이상은 가입 불가능/);
  const btnEl = screen.getByRole('button');

  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toBeDisabled();
  expect(btnEl).toHaveStyle({backgroundColor:'blue'});
})