export function useQueryParams() {
  const params = new URLSearchParams(window.location.search);

  return {
    get: (key: string) => params.get(key),
    getAll: (key: string) => params.getAll(key),
    has: (key: string) => params.has(key),
    set: (key: string, value: string) => {
      params.set(key, value);
      updateURL(params);
    },
    delete: (key: string) => {
      params.delete(key);
      updateURL(params);
    },
    clear: () => {
      params.forEach((_, key) => params.delete(key));
      updateURL(params);
    },
  };
}

function updateURL(params: URLSearchParams) {
  const newURL = `${window.location.pathname}${
    params.toString() ? "?" : ""
  }${params.toString()}`;
  window.history.pushState({}, "", newURL);
}
