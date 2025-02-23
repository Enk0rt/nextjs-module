export const
    RECIPES_PER_PAGE = 5,
    USERS_PER_PAGE = 5


export const routes = {
    home: '/',
    users: '/users',
    recipes: '/recipes',
}
export const baseApiUrl = 'https://dummyjson.com'

export const apiUrls = {
    users: baseApiUrl + '/auth/users',
    recipes: baseApiUrl + '/auth/recipes',
    refresh: baseApiUrl + '/auth/refresh'
}
