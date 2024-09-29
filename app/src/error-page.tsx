import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError() as { statusText?: string; message?: string };
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center min-h-screen">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-500 mb-4">Oops!</h1>
      <p className="text-lg text-gray-700 mb-4">Sorry, an unexpected error has occurred.</p>
      <p className="text-gray-500 italic">
        {error.statusText || error.message}
      </p>
    </div>
    </div>
  );
}