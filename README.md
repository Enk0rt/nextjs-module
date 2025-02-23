📌 Опис проєкту
This project is a Next.js application that allows users to browse, create, and filter recipes. It also includes authentication, search, and pagination functionality.


🚀 Technical Stack:
- Next.js 15
- TypeScript
- Axios
- Rest API
- SCSS
- Tailwind CSS


🔑 Project Features
- Authentication – Registration, login, session management via JWT.
- User List – Displaying all users.
- Recipe List – Viewing recipes with tag-based filtering.
- Search – Debounced search for users and recipes.
- Pagination – Lazy loading of items.
- Dynamic Routes – /users/[id], /recipes/[id], /recipes/tag/[tag].


**1. Authentication & Session Management**
The project uses JWT tokens for user authentication.

- When logging in, the user sends a request to the API (authApi.ts).
- The server returns an accessToken and refreshToken, which are stored in localStorage.
- The accessToken is included in the headers for authorization with each request.
- If the accessToken expires, the refreshToken is used to obtain a new token.
- When logging out, tokens are removed, and the session is reset.

**2. User & Recipe Search**
A client-side search is implemented using a custom hook useFindItems.tsx.

- The user enters a search query in the input field.
- Debounce (300ms delay) prevents excessive API requests.
- Data is fetched via an API request (getData.ts) or filtered from a local array.
- Results are displayed in SearchResults.tsx.
- Clicking outside the search field clears the input.

**3. Fetching & Displaying Data**
The project uses custom hooks and API requests to retrieve data.

- useGetSingleItem.ts – Fetches a single item (user/recipe).
- getUserRecipes(userId) – Retrieves all recipes for a specific user.
- useGetPaginatedItems.ts – Fetches paginated lists of recipes/users.
- Data is cached in local state using useState.

**4. Dynamic Pages in Next.js**
The project uses Next.js App Router for routing.

- /users/[id] – User profile page.
- /recipes/[id] – Recipe details page.
- /recipes/tag/[tag] – Recipe filtering by tags.

**5. Styling & UI**
The project uses SCSS for component styling.

- Each component has its own SCSS file (SearchResults.scss, UserItem.scss, etc.).
- Animations are applied using transition and hover.
- A CSS module approach is used for style isolation.



**Installation & Setup**
Clone the repository:
```
git clone https://github.com/Enk0rt/nextjs-module.git
cd nextjs-module
```

Install dependencies:
```
npm install
```

Run the project:
```
npm run dev
```

Open in the browser:
```
http://localhost:3000
```
