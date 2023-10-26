import React from 'react';

interface HomeProps {
  // Define your component's props here
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Landing page
    </main>
  );
}

export default Home;