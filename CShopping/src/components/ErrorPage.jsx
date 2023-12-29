import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const ErrorPage = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => (prev === 0 ? prev : prev - 1)); // prev sayesinde statein hep en gücenl değerini yakalayabiliyoruz.
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  if (count === 0) {
    return <Navigate to="/dashboard" />;
  }
  return (
    <main>
      <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-start h-screen md:px-8">
        <div className="max-w-lg mx-auto space-y-3 text-center">
          <h3 className="text-gray-800 text-4xl font-semibold sm:text-5xl">
            Someting went wrong!
          </h3>
          <p className="text-gray-600">
            Within <strong>{count}</strong> seconds, you will be redirected to
            the home page!
          </p>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;

// useEffect(() => {
//   const timer = setInterval(() => {
//     if (count === 1) {
//       return <Navigate to="/dashboard" />;
//     } else {
//       console.log(count);
//       setCount(count - 1);
//     }
//   }, 1000);
//   return () => clearInterval(timer);
// }, []);
//! bu şekilde yaptığımızda setInterval içinde setCount(count - 1) doğrudan mevcut count değerini kullanıyor. setInterval gerçekleştirildiği zaman, JavaScript count'un başlangıçtaki değerini yakalıyor ve setCount çağrıları her zaman o yakalanan başlangıç değerinden bir eksiltme yapıyor, en güncel state değerinden değil. O nedenle hep 9 da kalıyor.
