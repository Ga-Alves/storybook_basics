import { render } from '@testing-library/react';
import { composeStory } from '@storybook/react';
import Meta, { Primary as PrimaryStory } from './Button.stories';

const Primary = composeStory(PrimaryStory, Meta);

test('renders primary button with Hello World', () => {
  const { getByText } = render(<Primary>Hello world</Primary>);
  expect(getByText(/Hello world/i)).not.toBeNull();
});