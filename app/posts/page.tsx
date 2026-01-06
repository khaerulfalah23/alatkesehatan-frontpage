import PostPage from '@/components/features/posts/PostPage';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <PostPage />
    </Suspense>
  );
}
