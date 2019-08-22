# smoothWake

smoothWake is designed to help SWE's and Web Developers keep track of their projects and clients. smoothWake utilizes a SQL database, accessed via an express server. Alpha version 0.5 contains the complete backend, with full CRUD functionality. At present, the front-end (built in React) is still under development.

*BACK END INFORMATION*

- SQL database, with two tables at present (projects, and clients).
- Node.js backend, running Express.
- node-postgres used to interact with database.
- All tests run via Postman. When front-end is completed, the back end will likely need to be tweaked a bit to simplify fetching. (e.g. sending back JSON objects to be parsed by front-end)

*FRONT END INFORMATION*
- React front-end.
- State managed in React via prop-drilling. Initial concept had minimal state management, so Redux seemed unnecessary. However, this should be revisited at a future date.
- Butttons on home page work (as of 8.22.19), but the subsequent buttons which will be used to interact with the back-end are not yet functional. Need to build the rest of these components, and then connect them to the back-end.
- Minimalist styling using CSS.
- Webpack used to bundle the project.
