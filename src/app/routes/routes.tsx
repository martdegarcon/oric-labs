import Layout from "app/Layout";
import { AlgoList, AsyncList, Home, PracticeList, PremiumList, RefactoringList } from 'pages';

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: 'practice', element: <PracticeList /> },
            { path: 'refactoring', element: <RefactoringList /> },
            { path: 'algorithms', element: <AlgoList /> },
            { path: 'async', element: <AsyncList /> },
            { path: 'premium', element: <PremiumList /> }
        ]
    }
];
