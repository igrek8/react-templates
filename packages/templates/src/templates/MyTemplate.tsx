import React from 'react';
import { useIntl } from 'react-intl';
import url from '../assets/image.jpeg';
import css from './MyTemplate.module.css';

export interface MyTemplateProps {
  user: string;
}

export const MyTemplate: React.FC<MyTemplateProps> = ({ user }) => {
  const intl = useIntl();
  const now = new Date('2023-01-01');
  const timeNow = intl.formatDate(now, { dateStyle: 'long', timeStyle: 'long' });
  return (
    <>
      <p className={css.title}>{intl.formatMessage({ id: 'welcome' }, { user })}</p>
      <p>{intl.formatMessage({ id: 'now' }, { now: timeNow })}</p>
      <img src={url} alt="Image" width={200} />
    </>
  );
};
