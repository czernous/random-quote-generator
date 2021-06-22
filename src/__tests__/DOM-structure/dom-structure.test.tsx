/**
 * @jest-environment jsdom
 */

import { mount } from 'enzyme';
import React from 'react';
import { act } from 'react-dom/test-utils';
import App from '../../app/App';

// Testing whether all the required elements are present

const appWrapper = mount(<App />);
const quoteWrapper = appWrapper.render().find('#quote-box');

describe('It can find the following elements on page: ', () => {
  it('a wrapper element with the id of #quote-box', () => {
    expect(quoteWrapper).toHaveLength(1);
  });

  it('an element with the id of #text inside the #quote-box wrapper', () => {
    const quoteText = quoteWrapper.find('#text');
    expect(quoteText).toHaveLength(1);
  });

  it('an element with the id of #autor inside the #quote-box wrapper', () => {
    const quoteAuthor = quoteWrapper.find('#author');
    expect(quoteAuthor).toHaveLength(1);
  });

  it('a link with the id of #new-quote inside the #quote-box wrapper', () => {
    const newQuoteBtn = quoteWrapper.find('button#new-quote');
    expect(newQuoteBtn).toHaveLength(1);
  });

  it('a link with the id of #tweet-quote inside the #quote-box wrapper', () => {
    const tweetBtn = quoteWrapper.find('a#tweet-quote');
    expect(tweetBtn).toHaveLength(1);
  });
});
