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

/*************************************************** */

function send_message() {
  const urlParams = new URLSearchParams(window.location.search);
  const _id = urlParams.get('_id');
  Swal.fire({
    title: 'ข้อความตอบกลับ',
    html: `<textarea id="swresponse_message" name="w3review" rows="4" cols="50"</textarea>`,
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'ส่งข้อความ',
    denyButtonText: `ยกเลิก`
  }).then((result) => {
    if (result.isConfirmed) {
      let msg = document.getElementById('swresponse_message').value;
      if (msg !== '') {
        sendmsg(
          {
            status: 'send',
            response_message: msg
          },
          _id
        );
      }
    }
  });
}

function nosend_message() {
  const urlParams = new URLSearchParams(window.location.search);
  const _id = urlParams.get('_id');
  Swal.fire({
    title: 'ต้องการยกเลิกข้อความใช่หรือไม่',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'ไม่ส่งข้อความ',
    denyButtonText: `ยกเลิก`
  }).then((result) => {
    if (result.isConfirmed) {
      sendmsg(
        {
          status: 'nosend',
          response_message: ''
        },
        _id
      );
    }
  });
}

function sendmsg(body, id) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(body);
  var requestOptions = {
    method: 'PUT',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(
    'https://nr-api-smartcity-final.onrender.com/appeal/addRes/' + id,
    requestOptions
  )
    .then((response) => response.text())
    .then((result) =>
      Swal.fire('บันทึกข้อความเสร็จสิ้น', '', 'success').then(() =>
        location.reload()
      )
    )
    .catch((error) =>
      Swal.fire('เกิดข้อผิดพลาด', error, 'error').then(() => location.reload())
    );
}
