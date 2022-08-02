
export const fetchUserData = (phoneNumber, pass) => {
    // try {
    //     const response = await fetch('http://localhost:5008/api/GetCourt/user');
    //     if (response.ok) {
    //         const data = await response.json();
    //         return data;
    //     }

    //     const data = await response.json();
    // } catch (error) {
    //     throw new Error('fetch Error')
    // }

    const fetchData = async() => {
    const response = await fetch('http://localhost:5008/api/GetCourt/user');
    console.log(response);
    if (!response.ok) {
        throw new Error('fetch Error')
    }

    const data = await response.json();
    console.log(data)
    return data;
    }

    try {
      const usersData = fetchData();
      console.log(usersData);
      const user = usersData.find(user => user.phoneNumber === phoneNumber &&
          user.password === pass);
      if(user)
          return user;
      else
          alert('User not found please try again');
      }
     
    //   dispatch(authActions.LogIn(usersData));
      catch (error) {
         console.log(error)
     }
    

}




export const sendRegisterData = (userDetails) => {
    console.log('?')
    return async (dispatch) => {

        const sendRequest = async () => {
            fetch('http://localhost:5008/api/GetCourt/user/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phoneNumber: userDetails.enteredPhoneNumber,
                    firstName: userDetails.enteredFirstName,
                    lastName: userDetails.enteredLastName,
                    password: userDetails.enteredPassword,
                    dateOfBirth: userDetails.enteredBirthDate,
                    friendsList: [],
                    gamesList: [],
                    ordersList: [],
                    level: userDetails.enteredLevel
                })
            })

        }
        try {
            await sendRequest();

        } catch (error) {
            throw new Error(error)
        }

    }
}
