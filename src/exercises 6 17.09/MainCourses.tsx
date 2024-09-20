import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function MainCourses() {
  return (
    <div>
      <h2>Main Courses</h2>
      <nav>
        <Link to="pizza">Pizza </Link>
        <Link to="pasta">Pasta </Link>
        <Link to="hamburgers">Hamburgers</Link>
      </nav>
      <Outlet />
    </div>
  );
}
