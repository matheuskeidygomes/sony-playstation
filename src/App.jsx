import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/layout/index";
import Home from './pages/home/index';
import Games from './pages/games/index';
import Wallpapers from './pages/wallpapers/index';
import Header from './components/header';
import Footer from "./components/footer";

export default function App() {

  return <>

    <Layout>

      <Header />

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/wallpaper" element={<Wallpapers />} />

        </Routes>

      </BrowserRouter>

    </Layout>

    <Footer />

  </>

};


