export default defineEventHandler(async (event) => {

  
  await setUserSession(event, {
    // User data
    user: {
      email: "jims@mowing.net",
      firstName: "Jim",
    },

    // Any extra fields for the session data
    loggedInAt: new Date(),

    // Private data accessible only on server/ routes
    secure: {
      apiToken: "1234567890",
    },
  });

  sendRedirect(event, "/dash", 303);
});
