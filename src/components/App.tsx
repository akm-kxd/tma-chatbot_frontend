import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import { useSignal, isMiniAppDark } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { routes } from '@/navigation/routes.tsx';

export function App() {
  const isDark = useSignal(isMiniAppDark);

  return (
    <AppRoot appearance={isDark ? 'dark' : 'light'} platform='ios'>
      <HashRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </HashRouter>
    </AppRoot>
  );
}
