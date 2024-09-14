import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layouts';

function App() {
    return (
        <Router>
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;
                    let Layout =
                        route.layout ??
                        (route.layout === null ? Fragment : DefaultLayout);
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </Router>
    );
}

export default App;
