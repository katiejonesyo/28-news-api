import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe(' Article ', () => {
    afterEach(() => cleanup());
    it('renders the article', () => {
        const { asFragment } = render(<Article />);
    expect(asFragment().toMatchSnapshot());
    });
});


