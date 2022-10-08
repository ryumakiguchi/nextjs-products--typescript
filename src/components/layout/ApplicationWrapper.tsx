import React, {FC, PropsWithChildren} from 'react';
import Head from 'next/head';
import Link from 'next/link';

interface TProps {
  title:string;
  description?: string;
}
export const ApplicationWrapper: FC<PropsWithChildren<TProps>> = ({ title,
  descrption,
  childern }) => {
  return (
  <div className="bg-black min-h-screen flex flex-col">
    <Head>
      <title>{title} | Rootlab Movies</title>
    </Head>
  </div>
  );
};
