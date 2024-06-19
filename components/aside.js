// components/aside.js
import React from 'react';

const Aside = () => {
  return (
    <aside className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">About Me</h2>
      <p className="text-gray-700">
        私は、東京都出身の学生です。趣味は読書とランニングで、週末はよく公園を走っています。
      </p>
      <p className="text-gray-700 mt-2">
        将来の夢は、自分のスタートアップを立ち上げることです。ITの力で世界を変えたいと考えています。
      </p>
    </aside>
  );
};

export default Aside;