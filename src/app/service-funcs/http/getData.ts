import IApiResponse from '../../interfaces/IApiResponse';

const getData = async (endpoint: string): Promise<IApiResponse> => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  const result: IApiResponse = {
    error: null,
    data: [],
  };

  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(endpoint, {
      headers,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(`HTTP Error! status ${response.status}`);
    }

    result.data = [...data];
  } catch (error) {
    console.warn(error);
  }

  return result;
};

export default getData;
