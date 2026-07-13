import CreatePostForm from '../components/CreatePostForm';
import CreatePostHeader from '../components/CreatePostHeader';

export default function CreatePostPage() {
  return (
    <main className='mx-auto flex min-h-screen w-full max-w-content flex-col'>
      <CreatePostHeader />

      <section className='flex-1 px-4 py-6'>
        <CreatePostForm />
      </section>
    </main>
  );
}
