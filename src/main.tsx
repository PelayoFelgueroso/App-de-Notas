import { createRoot } from 'react-dom/client';
import './index.css';
import { AppNotas } from './App';
import { ThemeProvider } from './components/themeContext/ThemeContext';

const rootElement = document.getElementById('root');

if (rootElement) {
    createRoot(rootElement).render(
        <ThemeProvider>
            <AppNotas />
        </ThemeProvider>
    );
} else {
    console.error("Root element not found");
}
