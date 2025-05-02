

  function register() {
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
  
    if (!username || !email || !password || !confirmPassword) {
      Swal.fire({
              icon: "error",
              title: "Invalid",
              text: "Please fill all fields",
              footer: '<a href="#">Why do I have this issue?</a>'
            });
      
      return;
    }
  
    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "not match",
        text: "Please fill same password",
        footer: '<a href="#">Why do I have this issue?</a>'
      });

      return;
    }
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const userExists = users.some(user => user.email === email);
  
    if (userExists) {
      alert("Email is already registered.");
      return;
    }
  
    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    Swal.fire({
      title: "Registration successfull 👍",
      icon: "success",
      draggable: true
    }).then((result)=>{
      location.href="./login.html"
    })

    return false
  }

  function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    let users = JSON.parse(localStorage.getItem("users")) || [];
  
    const matchedUser = users.find(user => user.username === username && user.password === password);
  
    if (matchedUser) {
      
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successfull",
        showConfirmButton: false,
        timer: 1500
      }).then((result)=>{
        location.href="/index.html"
      })
    } else {
      Swal.fire({
        icon: "error",
        title: "User not found",
        text: "Invalid Details",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
    return false;
  }


  // VANTA.HALO({
  //   el: "#your-element-selector",
  //   mouseControls: true,
  //   touchControls: true,
  //   gyroControls: false,
  //   minHeight: 200.00,
  //   minWidth: 200.00
  // })

