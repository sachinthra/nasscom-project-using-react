const Auth = {
  isAuthenticated: true,

  authenticate() {
    this.isAuthenticated = true;
  },
  signout() {
    this.isAuthenticated = false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
};

export default Auth;

// getAuthFromServer() {
//   axios.defaults.baseURL = "http://584a801028de.ngrok.io/";
//   axios
//     .get("status")
//     .then((res) => {
//       console.log("status", res.data.status);
//       if (res.data.status !== "Up") {
//         this.signout();
//       } else {
//         this.authenticate();
//         return true;
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// },
