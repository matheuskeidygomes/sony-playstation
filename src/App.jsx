import React from "react";
import Layout from "./components/layout/index";
import Home from './pages/home/index';
import Header from './components/header';
import Footer from "./components/footer";

export default function App() {

  return <>

    <Layout>

      <Header />

      <Home />

    </Layout>

    <Footer />

  </>

};


