import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by Error Boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <div className="bg-card border border-border rounded-lg p-6 max-w-md">
              <h2 className="text-lg font-semibold mb-2">Error Details</h2>
              <p className="text-muted-foreground mb-2">
                {this.state.error?.message || 'An unknown error occurred'}
              </p>
              <details className="text-left">
                <summary className="cursor-pointer text-sm text-primary mb-2">Technical Details</summary>
                <pre className="bg-muted p-4 rounded text-xs overflow-auto">
                  {this.state.error?.stack}
                </pre>
              </details>
              <button
                onClick={() => window.location.reload()}
                className="mt-4 bg-primary text-primary-foreground px-4 py-2 rounded hover:opacity-90"
              >
                Reload Page
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
