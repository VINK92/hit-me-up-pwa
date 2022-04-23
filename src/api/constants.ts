export const API_ENDPOINTS = {
  // Routs for USER
  LOGIN: '/auth/login',
  LOGOUT: '/auth/logout/:userId',
  SIGNUP: '/auth/register',
  // Routs for WORDS
  WORDS: '/words/getAllWords',
  WORD_BY_ID: '/words/:wordId',

  // Routs for COLLOCATIONS
  COLLOCATIONS: '/collocations/getAllCollocations',
  COLLOCATION_BY_ID: '/collocations/:collocationId',
};

// Routs for WORDS

// GET /words/getAllWords - get all words
// GET /words/:wordId - get one word by id
// POST /words/new - add new word
// POST /words/delete/:wordId - delete one word

// Routs for COLLOCATIONS

// GET /collocations/getAllCollocations - get all collocations
// GET /collocations/:collocationId - get one collocation by id
// POST /collocations/new - add new collocation
// POST /collocations/delete/:collocationId - delete one collocation

// Routs for USER

// GET /users - get all users
// POST /auth/register - register new user
// POST /auth/login - login user
// POST /auth/logout/:userId - logout user
