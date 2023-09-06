var jwt = localStorage.getItem('jwt');
if (jwt == null) {
  window.location.href = '../../login.html';
}
0;

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

function sendmsg(body, id) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  var raw = JSON.stringify(body);
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
  fetch(
    'https://smartcity.onrender.com/health/AllHealth' + id,
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

$('#search_form').submit(async function (e) {
  e.preventDefault();
  let url = '';
  const f = $('#title').val();
  if ($('#input-text').val() === '' && $('#input-select').is(':hidden')) {
    url = 'https://smartcity.onrender.com/health/AllHealth';
  } else {
    const k =
      $('#input-text').val() === ''
        ? $('#input-select').val()
        : $('#input-text').val();
    url =
      'https://smartcity.onrender.com/health/AllHealth?field=' +
      f +
      '&keyword=' +
      k;
  }
  const res = await fetch(url);
  const datas = await res.json();
  $('#myTable').DataTable().clear().draw();
  $('#myTable').DataTable().rows.add(datas);
  $('#myTable').DataTable().columns.adjust().draw();
});

$(document).ready(async function () {
  const url = 'https://smartcity.onrender.com/health/AllHealth';
  const res = await fetch(url);
  const datas = await res.json();
  $('#myTable').DataTable({
    searching: false,
    lengthChange: false,
    data: datas,
    columns: [
      { data: 'cardID' },
      { data: 'fullname' },
      { data: 'sex' },
      { data: 'hospital' },
      { data: 'birthday' },
      { data: 'elderly' },
      { data: 'bedridden_patient' },
      { data: 'handicapped' },
      {
        data: '_id',
        render: function (data, type, row) {
          return `<a class="btn btn btn-primary" href="../healthData/health_Edit.html?_id=${data}">จัดการ</a>`;
        }
      }
    ],
    language: {
      zeroRecords: ' '
    },
    info: false
  });
});

function setTitle(val = $('#title').val()) {
  let select = document.getElementById('input-select');
  let text = document.getElementById('input-text');
  if (
    val === 'elderly' ||
    val === 'bedridden_patient' ||
    val === 'handicapped'
  ) {
    text.style.display = 'none';
    select.style.display = 'block';
  } else {
    text.style.display = 'block';
    select.style.display = 'none';
    text.value = '';
  }
}
