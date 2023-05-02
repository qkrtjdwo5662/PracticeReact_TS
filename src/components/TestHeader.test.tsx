import { render, screen } from '@testing-library/react';
import TestHeader from './TestHeader';

test('isLogin이 true로 전달이 잘 된 상태에서, userId가 잘뜨는지 확인해본다.', () => {
  render(<TestHeader isLogin = {true} userId = 'park'/>);
  const textEl = screen.getByText(/park님 환영합니다/i);
  expect(textEl).toBeInTheDocument();
})

test('isLogin false 일 때', () => {
  render(<TestHeader isLogin={false}/>);
  const textEl = screen.getByText(/로그인 해주세요/);
  const btnEl = screen.getByRole('button');
  expect(textEl).toBeInTheDocument();
  expect(btnEl).toBeInTheDocument();
  expect(btnEl).toHaveTextContent('로그인');
})