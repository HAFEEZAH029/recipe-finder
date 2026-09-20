import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import './index.css'
import App from './App'

const rootElement = document.getElementById('root');
const clientQuery = new QueryClient();

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <QueryClientProvider client={clientQuery}>
        <App />
      </QueryClientProvider>
    </StrictMode>,
  );
}

