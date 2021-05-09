import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import useFetch from './useFetchHook';

test('useFetch performs GET request', async () => {
  const mock = new MockAdapter(axios);

  const mockData = 'response';
  const url = 'https://mock';
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch({ inputObject: { endpoint: url, method: 'GET' } }),
  );

  expect(result.current.data).toBeUndefined();
  expect(result.current.state.status).toBe('fetching');

  await waitForNextUpdate();

  expect(result.current.state.data.data).toEqual('response');
  expect(result.current.state.status).toBe('fetched');
});

test('useFetch returns error object when content not found', async () => {
  const mock = new MockAdapter(axios);
  const mockData = '404 Not found';

  const url = 'https://mock';
  mock.onGet(url).reply(404, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch({ inputObject: { endpoint: url, method: 'GET' } }),
  );

  expect(result.current.data).toBeUndefined();
  expect(result.current.state.status).toBe('fetching');

  await waitForNextUpdate();

  expect(result.current.state.error.data).toEqual('404 Not found');
  expect(result.current.state.error.status).toBe(404);
});
