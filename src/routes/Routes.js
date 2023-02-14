import React from 'react';
import { BrowserRouter, Route, Routes as ReactRouterDom } from 'react-router-dom';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Fetch from '../pages/fetch/Fetch';
import Layout from '../components/layout/Layout';
import Wrapper from '../components/wrapper/Wrapper';
import Contexto from '../pages/contexto/Contexto';


const Routes = () => {
    return (
    <>
        <BrowserRouter>
            <Layout>
                <Wrapper>
                    <ReactRouterDom>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/fetch" element={<Fetch />} />
                        <Route path="/contexto" element={<Contexto />} />
                    </ReactRouterDom>
                </Wrapper>
            </Layout>
        </BrowserRouter>
    </>
    )
}

export default Routes;