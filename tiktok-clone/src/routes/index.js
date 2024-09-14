import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import { HeaderOnlyLayout } from '~/components/Layouts';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search, layout: HeaderOnlyLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
