import React,{ Component } from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error:", error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.reload(); // Reload the page to reset the error
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
          <h1 className="text-2xl font-bold mb-4">Something went wrong 😢</h1>
          <p className="mb-4">An unexpected error occurred. Please try again.</p>
          <button
            onClick={this.handleReset}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            🔄 Reload Page
          </button>
          <Link to="/" className="mt-4 text-blue-500 hover:underline">
            🏠 Go to Home
          </Link>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
