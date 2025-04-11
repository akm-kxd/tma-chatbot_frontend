import { mockTelegramEnv, isTMA, emitEvent } from '@telegram-apps/sdk-react';

if (import.meta.env.DEV) {
  if (!(await isTMA('complete'))) {
    const themeParams = {
      accent_text_color: '#2a7de1',
      bg_color: '#ffffff',
      button_color: '#2a7de1',
      button_text_color: '#ffffff',
      destructive_text_color: '#ff3b30',
      header_bg_color: '#f1f1f1',
      hint_color: '#999999',
      link_color: '#1a0dab',
      secondary_bg_color: '#f5f5f5',
      section_bg_color: '#ffffff',
      section_header_text_color: '#2a7de1',
      subtitle_text_color: '#666666',
      text_color: '#000000',
    } as const;

    const noInsets = { left: 0, top: 0, bottom: 0, right: 0 } as const;

    mockTelegramEnv({
      onEvent(e) {
        if (e[0] === 'web_app_request_theme') {
          return emitEvent('theme_changed', { theme_params: themeParams });
        }
        if (e[0] === 'web_app_request_viewport') {
          return emitEvent('viewport_changed', {
            height: window.innerHeight,
            width: window.innerWidth,
            is_expanded: true,
            is_state_stable: true,
          });
        }
        if (e[0] === 'web_app_request_content_safe_area') {
          return emitEvent('content_safe_area_changed', noInsets);
        }
        if (e[0] === 'web_app_request_safe_area') {
          return emitEvent('safe_area_changed', noInsets);
        }
      },
      launchParams: new URLSearchParams([
        ['tgWebAppThemeParams', JSON.stringify(themeParams)],
        [
          'tgWebAppData',
          new URLSearchParams([
            ['auth_date', ((new Date().getTime() / 1000) | 0).toString()],
            ['hash', 'some-hash'],
            ['signature', 'some-signature'],
            ['user', JSON.stringify({ id: 1, first_name: 'Vladislav' })],
          ]).toString(),
        ],
        ['tgWebAppVersion', '8.4'],
        ['tgWebAppPlatform', 'tdesktop'],
      ]),
    });

    console.info(
      '⚠️ Development environment detected. Mocked Telegram environment is active for light theme. This behavior only exists during development and will be removed in production builds.'
    );
  }
}
