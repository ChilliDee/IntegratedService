interface ErrorProps {
  error: Error;
}
export const Error = (errorObject: any) => {
  return (
    <div className="min-h-dvh flex justify-center items-center">
      <div className="bg-red-500 p-5 border-r-2">
        <h1 className="text-center">Oops, something has gone wrong</h1>
        <p>
          If this issue persists, please report the following error code:{" "}
          {errorObject.error.response.data}
        </p>
      </div>
    </div>
  );
};
