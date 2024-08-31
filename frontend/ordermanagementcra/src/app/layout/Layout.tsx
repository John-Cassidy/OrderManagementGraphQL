import Container from '@mui/material/Container';
import NavBar from './nav/NavBar';
import { Outlet } from 'react-router-dom';
import React from 'react';

export default function Layout() {
  return (
    <>
      <NavBar />
      <Container sx={{ p: '2rem' }}>
        <Outlet />
      </Container>
    </>
  );
}
