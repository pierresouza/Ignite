type User = {
  name: string;
  email: string;
  address: {
    city: string;
    state?: string;
  };
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name},your e-mail is ${user.email}.Your city is ${user.address.city} and your state is ${user.address.state}`;
}

const message = showWelcomeMessage({
  name: "Pierre",
  email: "batata@batata.com",
  address: {
    city: "São paulo",
    state: "SP",
  },
});

console.log(message);
