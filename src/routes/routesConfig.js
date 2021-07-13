import MovieList from '../components/MovieList'
import MovieInfo from '../components/MovieInfo'


const routesConfig = [{
        path: '/',
        exact: true,
        component: MovieList
    },
    {
        path: '/movie-info/:id',
        exact: true,
        component: MovieInfo
    },
]

export default routesConfig;