window.onload = async (e) => {
  await loadTable('รอตรวจสอบ');
  await loadTable('กำลังดำเนินการ');
  await loadTable('เสร็จสิ้น');
};
async function loadTable(con) {
  let baseURL = 'https://nr-smartcity.onrender.com/appeal/app/';
  let trHTML = '';
  let status = [];
  let color = [];
  let count = 0;
  let redirectURL = '';
  status['รอตรวจสอบ'] = 'tb1';
  status['กำลังดำเนินการ'] = 'tb2';
  status['เสร็จสิ้น'] = 'tb3';
  
  color['รอตรวจสอบ'] = 'red';
  color['กำลังดำเนินการ'] = 'orange';
  color['เสร็จสิ้น'] = 'green';
  switch (con) {
    case 'รอตรวจสอบ':
      baseURL += '1';
      redirectURL = 'appealEdit';
      break;
    case 'กำลังดำเนินการ':
      baseURL += '2';
      redirectURL = 'appealExamine';
      break;
    case 'เสร็จสิ้น':
      baseURL += '3';
      redirectURL = 'appealFinish';
      break;
  }
  let data = await (await fetch(baseURL)).json();
  data = data.reverse();
  console.log(data[0]);
  data.forEach(async (element, i) => {
    count++;
    trHTML += `<tr>
          <td>${element.type}</td>
          <td>${element.details}</td>
          <td>${element.fullname}</td>
          <td><span style="color: ${color[con]}">${element.status}</span></td>
          <td>${element.created}</td>
          ${con !== 'รอตรวจสอบ' ? `<td>${element.adminData.name}</td>` : ''}
          <td><a class="btn btn-light btn-active-light-primary btn-lg" href="./${redirectURL}.html?_id=${
      element._id
    }">จัดการ</a></td>
        </tr>`;
  });
  document.querySelector('.' + status[con]).innerText = ' (' + count + ') ';
  let HTML = `<div class="table-responsive">
  <table id="customers" style="width: 100%;">
      <thead>
          <tr>
              <th scope="col">เรื่อง</th>
              <th scope="col">หัวข้อ อาการ</th>
              <th scope="col">ชื่อผู้แจ้ง</th>
              <th scope="col">สถานะ</th>
              <th scope="col">วันเวลาที่แจ้ง</th>
              ${con !== 'รอตรวจสอบ' ? '<th scope="col">ผู้รับผิดชอบ</th>' : ''}
              <th scope="col">จัดการ</th>
          </tr>
      </thead>
      <tbody id="mytable">
          <tr>
              ${trHTML}
          </tr>
      </tbody>
  </table>
</div>`;
  document.getElementById(status[con]).innerHTML = HTML;
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

function logout() {
  localStorage.removeItem('jwt');
  window.location.href = '../../login.html';
}

async function openTable(evt, con, id) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName('tabcontent');
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablinks');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace('active', '');
  }
  document.getElementById(id).style.display = 'block';
  evt.currentTarget.className += 'active';
  await loadTable(con);
}
