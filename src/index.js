import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import App from './App';
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 1000 * 60 * 5
		}
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
			<ReactQueryDevtools/>
		</QueryClientProvider>
  </React.StrictMode>
);

