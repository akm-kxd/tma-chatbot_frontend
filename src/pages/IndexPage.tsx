import { useEffect, type FC } from 'react';
import { requestContact, setMainButtonParams } from '@telegram-apps/sdk-react';
import {
  Section,
  Cell,
  List,
  IconButton,
  Headline,
  Subheadline,
} from '@telegram-apps/telegram-ui';
import { ChevronRight, Settings, Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Page } from '@/components/Page.tsx';

export const IndexPage: FC = () => {
  useEffect(() => {
    // requestContact();
    setMainButtonParams({
      isVisible: true,
      text: 'Новый чат',
      backgroundColor: '#2990ff',
    });

    return () => {
      setMainButtonParams({ isVisible: false });
    };
  }, []);

  return (
    <Page back={false}>
      <div className='p-4'>
        <header className='flex justify-between'>
          <IconButton mode='gray' size='s'>
            <Settings />
          </IconButton>
          <IconButton
            mode='gray'
            size='s'
            className='flex items-center gap-2 !rounded-2xl !px-3'
          >
            <Sparkle size={16} />
            Free подписка
          </IconButton>
        </header>
        <main className='py-4'>
          <Link to='/referrals'>
            <Headline>Приглашайте друзей</Headline>
            <Subheadline className='flex items-center'>
              Получайте 10% с пополнений друзей
              <ChevronRight size={16} />
            </Subheadline>
          </Link>
          <List className='mt-4 !p-0'>
            <Section>
              <Cell
                before={
                  <img
                    src='/chatgpt-icon.svg'
                    className='min-h-[24px] min-w-[24px]'
                  />
                }
                subtitle='Привет! Как я могу помочь тебе сегод...'
                after='10.04'
              >
                привет
              </Cell>
              <Cell
                before={
                  <img
                    src='/chatgpt-icon.svg'
                    className='min-h-[24px] min-w-[24px]'
                  />
                }
                subtitle='Hello! How can I assist you today?'
                after='09.04'
              >
                hu
              </Cell>
              <Cell
                before={
                  <img
                    src='/chatgpt-icon.svg'
                    className='min-h-[24px] min-w-[24px]'
                  />
                }
                subtitle='Привет! Как я могу помочь тебе сегод...'
                after='09.04'
              >
                привет
              </Cell>
            </Section>
          </List>
        </main>
      </div>
    </Page>
  );
};
