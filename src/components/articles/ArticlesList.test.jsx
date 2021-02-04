import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticlesList from './ArticlesList';

describe("ArticlesList component", () => {
  afterEach(() => cleanup());
  it('renders ArticlesList', () => {
    const { asFragment } = render(<ArticlesList articles={[]} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

