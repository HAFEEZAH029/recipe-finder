import { useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const ErrorElement = () => {
  const error = useRouteError();
  
  let errorMessage = "Oops! Something went wrong";
  let errorDetails = "We encountered an unexpected error.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      errorMessage = "Page not found";
      errorDetails = "The page you're looking for doesn't exist.";
    } else if (error.status === 500) {
      errorMessage = "Server error";
      errorDetails = "We're experiencing technical difficulties.";
    }
  } else if (error instanceof Error) {
    errorDetails = error.message;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6" role="alertdialog" aria-labelledby="error-heading" aria-describedby="error-details">
      <div className="text-center max-w-lg">

        <div className="mb-8" aria-hidden="true">
          <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-evergreen-100">
            <span className="text-5xl" role="img" aria-label="plate">🍽️</span>
          </div>
        </div>

        <h1 id="error-heading" className="text-4xl font-bold text-evergreen-900 mb-4">
          {errorMessage}
        </h1>

        <p id="error-details" className="text-lg text-evergreen-600 mb-8" aria-live="polite">
          {errorDetails}
        </p>

        <Link
          to="/"
          className="inline-block px-8 py-3 bg-evergreen-900 text-white font-semibold rounded-lg hover:bg-evergreen-700 transition focus:outline focus:outline-orange-500"
          aria-label="Return to homepage"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;