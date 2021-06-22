import React, { ReactElement, useEffect, useState } from 'react';
import IApiResponse from '../interfaces/IApiResponse';
import getData from '../service-funcs/http/getData';
import twitterLogo from '../assets/icons/twitter.svg';

const QuoteBox = (): ReactElement => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [apiData, setApiData] = useState<any>({
    data: {
      text: '',
      author: '',
    },
    error: null,
  });
  const endpoint = 'https://type.fit/api/quotes';
  const [isLoaded, setLoaded] = useState(false);
  const loaded = () => setLoaded(true);
  const loading = () => setLoaded(false);
  const fetchApiData = async () => {
    const apiResponse: IApiResponse = await getData(endpoint);
    const randomNum = Math.floor(Math.random() * apiResponse.data.length);
    const chosenArr = apiResponse.data[randomNum];

    loaded();
    setApiData({
      error: apiResponse.error,
      data: chosenArr,
    });
  };
  // get quotes on page load
  React.useEffect(() => {
    fetchApiData();
  }, []);
  // update quotes
  const updateQuotes = () => {
    loading();
    fetchApiData();
  };

  return (
    <div className="quote-box" id="quote-box">
      <div className="quote-box__content">
        <div id="text">
          {isLoaded ? (
            <span>{apiData.data.text}</span>
          ) : (
            <svg
              width="120"
              height="30"
              viewBox="0 0 120 30"
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
            >
              <circle cx="15" cy="15" r="15">
                <animate
                  attributeName="r"
                  from="15"
                  to="15"
                  begin="0s"
                  dur="0.8s"
                  values="15;9;15"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="1"
                  to="1"
                  begin="0s"
                  dur="0.8s"
                  values="1;.5;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                <animate
                  attributeName="r"
                  from="9"
                  to="9"
                  begin="0s"
                  dur="0.8s"
                  values="9;15;9"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="0.5"
                  to="0.5"
                  begin="0s"
                  dur="0.8s"
                  values=".5;1;.5"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="105" cy="15" r="15">
                <animate
                  attributeName="r"
                  from="15"
                  to="15"
                  begin="0s"
                  dur="0.8s"
                  values="15;9;15"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="fill-opacity"
                  from="1"
                  to="1"
                  begin="0s"
                  dur="0.8s"
                  values="1;.5;1"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          )}
        </div>
        <span id="author">{isLoaded ? apiData.data.author : ''}</span>
      </div>
      <div className="quote-box__actions">
        <button
          type="button"
          id="new-quote"
          onClick={() => {
            updateQuotes();
          }}
        >
          New quote
        </button>
        <div className="social">
          <a
            className="social__link"
            id="tweet-quote"
            href="twitter.com/intent/tweet"
            target="_top"
          >
            <img src={twitterLogo} alt="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default QuoteBox;
