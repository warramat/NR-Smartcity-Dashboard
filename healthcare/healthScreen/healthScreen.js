var jwt = localStorage.getItem('jwt');
if (jwt == null) {
  window.location.href = '../../login.html';
}

function readJWT() {
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
  return obj;
}

function loadUser() {
  const obj = readJWT();
  document.getElementById('userid').innerText = obj.userid;
  document.getElementById('adminname').innerText = obj.name;
}

loadUser();

function logout() {
  localStorage.removeItem('jwt');
  window.location.href = '../../login.html';
}

window.onload = async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const _id = urlParams.get('_id');
  let url =
    'https://nr-smartcity.onrender.com/appeal/userData/?id=' + _id;
  if ((await (await fetch(url)).status) !== 200) {
    document.write('not found.');
    return;
  }
  let data = await (await fetch(url)).json();
  setPage(data);
  console.log(data);
};

function setPage(data) {
  const img_url = 'https://nr-smartcity.onrender.com/userSmart/';
  document.getElementById('pictureUrl').src = data.pictureUrl;
  let H = Object.keys(data);
  H.forEach((e) => {
    try {
      document.getElementById(e).innerText = data[e];
    } catch (err) {}
  });

  try {
    document.getElementById(
      'address'
    ).innerText = `${data.housenumber} ${data.sub_district} ${data.district} ${data.province} ${data.zipcode}`;

    document.getElementById(
      'name'
    ).innerText = `${data.prefix} ${data.name} ${data.lastname}`;
    document.getElementById('created1').innerText = data.created;
    document.getElementById('adminstart').innerText = ` ${toThaidate(
      data.created
    )} เวลา ${getTime(data.created)} โดย ${data.name} ${data.lastname}`;

    document.getElementById('adminend').innerText = ` ${toThaidate(
      data.edit
    )} เวลา ${getTime(data.edit)} โดย ${data.admin_startData.name}`;

    document.getElementById('end').innerText = ` ${toThaidate(
      data.end
    )} เวลา ${getTime(data.end)} โดย ${data.admin_startData.name}`;

    document.getElementById('response_time').innerText = ` ${toThaidate(
      data.response_time
    )} เวลา ${getTime(data.response_time)}`;

    document.getElementById(
      'map'
    ).href = `https://www.google.com/maps?q=${data.gps.lat},${data.gps.lng}`;
    document.getElementById('tel').href = 'tel:' + data.telephone;
    document.getElementById('tel1').innerText = data.telephone;
    document.getElementById('status1').innerText = data.status;
    document.getElementById('end1').innerText = data.end;
    renderStar(data.Star);
  } catch (e) {}
  let html_img = '';
  data.img.forEach((e) => {
    html_img += `
    <li class="item">
      <a  href='${img_url}${e}'>
        <img  class="img-row-preview" src="${img_url}${e}"/>
      </a>
    </li>`;
  });
  document.getElementById('preview').innerHTML = html_img;
  html_img = '';
  data.add_img.forEach((e) => {
    html_img += `
    <li class="item">
      <a  href='${img_url}${e}'>
        <img  class="img-row-preview" src="${img_url}${e}"/>
      </a>
    </li>`;
  });
  document.getElementById('add_img').innerHTML = html_img;
  if (data.response_time === '') {
    showmsg();
  }
}

function commit() {
  const adminData = readJWT();
  const urlParams = new URLSearchParams(window.location.search);
  const _id = urlParams.get('_id');
  const url =
    'https://nr-smartcity.onrender.com/appeal/editappeal/' + _id;
  Swal.fire({
    icon: 'question',
    title: 'ยืนยันการรับงาน ?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'ยืนยัน',
    denyButtonText: 'ยกเลิก'
  }).then((result) => {
    if (result.isConfirmed) {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      let raw = JSON.stringify({
        id: adminData.id
      });
      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch(url, requestOptions)
        .then((response) => response.text())
        .then((result) =>
          Swal.fire('บันทึกข้อมูลสำเร็จ!', '', 'success').then(() => {
            window.location = './appeal.html';
          })
        )
        .catch((error) =>
          Swal.fire('เกิดข้อผิดพลาด', error, 'error').then(() => {
            location.reload();
          })
        );
    }
  });
}

function renderStar(Star) {
  let html = '';
  if (Star === 0) {
    document.getElementById('star').innerHTML = '-';
    return;
  }
  for (let i = 0; i < 5; i++) {
    if (i < Star) {
      html += '<span class="fa fa-star checked"></span>';
    } else {
      html += '<span class="fa fa-star"></span>';
    }
  }
  document.getElementById('star').innerHTML = html;
}

function showmsg() {
  document.getElementById('msg').innerHTML = ` 
  <button type="button" onclick="send_message()" id="close"
  style="background-color:#229a58;color:white;margin: 0px 5px;"
  class="btn btn-primary align-self-center">ส่งข้อความ</button>
<button type="button" onclick="nosend_message()" id="close"
  style="background-color:#b81d43;color:white;margin: 0px 5px;"
  class="btn btn-primary align-self-center">ไม่ส่งข้อความ</button>`;
}
