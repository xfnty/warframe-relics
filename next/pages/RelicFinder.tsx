import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const RedirectPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/relic-finder');
  }, [router]);

  return null;
};

export default RedirectPage;
