import { RenderHookResult, renderHook } from '@testing-library/react-hooks';

export interface CustomRenderHookResult<T>
  extends RenderHookResult<unknown, T> {
  mocks: { moduleName: string; mockImplementation: any }[];
}

export const renderHookWithMocks = <T>(
  hookFn: () => T,
  mocks: { moduleName: string; mockImplementation: any }[]
): RenderHookResult<unknown, T> => {
  jest.resetModules();
  mocks.forEach((mock) => {
    jest.mock(mock.moduleName, () => mock.mockImplementation);
  });

  const result = renderHook(hookFn);

  return result;
};

export const mockFn = jest.fn();
export const mockRouterPush = jest.fn();
export const mockSetDoc = jest.fn();
export const mockGetDocs = jest.fn(() => ({ empty: true }));
export const mockGetDocsFn = jest.fn(() => Promise.resolve({ empty: true }));
export const mockShowErrorToast = jest.fn();
export const mockShowSuccessfullToast = jest.fn();
export const mockUseRouter = jest.fn(() => ({
  push: mockRouterPush,
}));
