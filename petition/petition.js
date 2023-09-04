function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    'GET',
    'https://nr-smartcity.onrender.com/petition/petitionAll'
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      var trHTML = '';
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['type'] + '</td>';
        trHTML += '<td>' + object[''] + '</td>';
        trHTML += '<td>' + object['status'] + '</td>';
        trHTML += '<td>' + object['created'] + '</td>';
        trHTML +=
          '<td><button type="button" class="btn btn-outline-secondary" href="./appealManage.html">จัดการ</button>';
        trHTML += '</tr>';
      }
      document.getElementById('mytable').innerHTML = trHTML;
    }
  };
}
loadTable();

/************************************************************** */

function showUserCreateBox() {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="id" type="hidden">' +
      '<input id="fname" class="swal2-input" placeholder="First">' +
      '<input id="lname" class="swal2-input" placeholder="Last">' +
      '<input id="username" class="swal2-input" placeholder="Username">' +
      '<input id="email" class="swal2-input" placeholder="Email">',
    focusConfirm: false,
    preConfirm: () => {
      userCreate();
    }
  });
}

function userCreate() {
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', 'https://www.mecallapi.com/api/users/create');
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(
    JSON.stringify({
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: 'https://www.mecallapi.com/users/cat.png'
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}

/**************************************************************** */

function showUserEditBox(id) {
  console.log(id);
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', 'https://www.mecallapi.com/api/users/' + id);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      const user = objects['user'];
      console.log(user);
      Swal.fire({
        title: 'Edit User',
        html:
          '<input id="id" type="hidden" value=' +
          user['id'] +
          '>' +
          '<input id="fname" class="swal2-input" placeholder="First" value="' +
          user['fname'] +
          '">' +
          '<input id="lname" class="swal2-input" placeholder="Last" value="' +
          user['lname'] +
          '">' +
          '<input id="username" class="swal2-input" placeholder="Username" value="' +
          user['username'] +
          '">' +
          '<input id="email" class="swal2-input" placeholder="Email" value="' +
          user['email'] +
          '">',
        focusConfirm: false,
        preConfirm: () => {
          userEdit();
        }
      });
    }
  };
}

function userEdit() {
  const id = document.getElementById('id').value;
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;

  const xhttp = new XMLHttpRequest();
  xhttp.open('PUT', 'https://www.mecallapi.com/api/users/update');
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(
    JSON.stringify({
      id: id,
      fname: fname,
      lname: lname,
      username: username,
      email: email,
      avatar: 'https://www.mecallapi.com/users/cat.png'
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}

/************************************************************ */

function userDelete(id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open('DELETE', 'https://www.mecallapi.com/api/users/delete');
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(
    JSON.stringify({
      id: id
    })
  );
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      Swal.fire(objects['message']);
      loadTable();
    }
  };
}

/************************Login*************************** */
var jwt = localStorage.getItem('jwt');
if (jwt == null) {
  window.location.href = '../../login.html';
}

function loadUser() {
  var base64Url = jwt.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join('')
  );
  const obj = JSON.parse(jsonPayload);
  document.getElementById('userid').innerText = obj.userid;
  document.getElementById('name').innerText = obj.name;
}

loadUser();

function logout() {
  localStorage.removeItem('jwt');
  window.location.href = '../../login.html';
}
พี่