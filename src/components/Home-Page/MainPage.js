import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Homepage from '../HomePage';
import Cards from '../Cards';
const MainPage = () => {
  return (
    <div className="min-h-screen ">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-[251px] p-8 w-full">
          <Homepage/>
          <Cards/>
        </main>
      </div>
    </div>
  );
};
export default MainPage;
