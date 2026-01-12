import { Suspense } from 'react';
import { Loading } from '@/components/common/Loading';
import { PostPage } from '@/components/features/posts/PostPage';

export default function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <PostPage />
    </Suspense>
  );
}
