var person = {
    firstName: "John",
    lastName: "Doe",
    id: 55,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };