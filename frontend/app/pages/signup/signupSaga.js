// const saveTheUser = async () => {
//     setLoading(true)
//     try {
//       const res = await fetch('http://localhost:8008/api/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           name,
//           surname,
//           email,
//           password
//         })
//       })
//       console.log(res)
//       if (res.ok) {

//         const data = await res.json();


//         localStorage.setItem('token', JSON.stringify(data.token));

//         console.log('user saved')

//       } else {
//         const errorData = await res.json();
//         setSignupError(errorData.error)
//       }

//     } catch (error) {
//       console.log(error)
//     }
//     finally {
//       setLoading(false)
//     }
//   }