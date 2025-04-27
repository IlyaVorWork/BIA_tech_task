import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from "@/components/ui/provider"
import './index.css'
import App from './App.tsx'
import {
  ModuleRegistry,
  AllCommunityModule,
} from 'ag-grid-community';

ModuleRegistry.registerModules([
  AllCommunityModule,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>,
)
