'use client';
import MeetingTypeList from '@/components/MeetingTypeList';
import { useUser } from '@clerk/nextjs';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  const { user } = useUser();

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[300px] justify-center items-center w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
          <h2 className="glassmorphism2 max-w-[273px] rounded py-2 text-center text-base font-normal">
            Welcome {`${user?.firstName}!` || 'to Connectify!'}
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{time}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{date}</p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;