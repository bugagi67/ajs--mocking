import fetchData from '../http';
import getLevel from '../app';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('fetchData function test with ok status', () => {
  fetchData.mockReturnValue({
    status: 'ok',
    level: 12,
  });

  const result = getLevel(2);
  const expected = 'Ваш текущий уровень: 12';

  expect(result).toMatch(expected);
});

test('test the fetchData function with the status not ok', () => {
  fetchData.mockReturnValue({});

  const result = getLevel(2);
  const expected = 'Информация об уровне временно недоступна';

  expect(result).toMatch(expected);
});

test('fetchData function test with ok status', () => {
  fetchData.mockReturnValue({
    status: 'ok'
  });
});