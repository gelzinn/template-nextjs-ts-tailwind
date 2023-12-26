export default function NotFound() {
  return (
    <>
      <h1 className="text-center text-6xl">404</h1>

      <p className="flex items-center justify-center">
        This page does not exist.
      </p>

      <p className="flex items-center justify-center">
        <a href="/" className="text-blue-600 hover:text-blue-800">
          Go back to home
        </a>
      </p>
    </>
  );
}
