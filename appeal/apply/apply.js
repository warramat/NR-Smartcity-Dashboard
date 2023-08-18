let type = 'ถนน - ทางเท้า';
let topic = 'road';

const types = [
  'ถนน - ทางเท้า',
  'ไฟฟ้า',
  'ประปา',
  'ตัดต้นไม้/กิ่งไม้',
  'เหตุสร้างความรำคาญ',
  'ขยะสิ่งปฎิกูล',
  'เบี้ยยังชีพ',
  'กองทุน 1.5 บาท',
  'คูระบายน้ำ'
];
const topics = [
  'road',
  'electric',
  'plumbing',
  'cuttrees',
  'annoying',
  'garbage',
  'pension',
  'fund',
  'drainageditch'
];

function gettype() {
  const index = $('#type').val();
  type = types[index];
  topic = topics[index];
}

/******************************************************************************* */
function loadTable() {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    'GET',
    'https://smartcity.onrender.com/apply/applyAll/'
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var trHTML = '';
      const objects = JSON.parse(this.responseText);
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['type'] + '</td>';
        trHTML += '<td>' + object['details'] + '</td>';
        trHTML += '<td>' + object['topic'] + '</td>';
        trHTML += `<td><button type="button" class="btn btn-outline-secondary" onclick="showUserEditBox('${object['_id']}')">แก้ไข</button>`;
        trHTML += `<button type="button" class="btn btn-outline-danger" onclick="userDelete('${object['_id']}')">ลบ</button></td>`;
        trHTML += '</tr>';
      }
      document.getElementById('mytable').innerHTML = trHTML;
    }
  };
}

loadTable();

/************************************************************** */

function showUserCreateBox() {
  let html =
    '<select class="swal2-input" name="type" id="type"  onchange="gettype()">';
  types.forEach((e, i) => {
    html += `<option value="${i}">${e}</option>`;
  });
  html += '</select>';
  Swal.fire({
    title: 'เพิ่มเรื่อง',
    html:
      html + '<input id="details" class="swal2-input" placeholder="Details">',
    focusConfirm: false,
    preConfirm: () => {
      if ($('#details').val() !== '') {
        userCreate();
      } else {
        Swal.fire({
          title: 'กรุณากรอกข้อมูล',
          timer: 3000
        });
      }
    }
  });
}

function userCreate() {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    'POST',
    'https://smartcity.onrender.com/apply/addapply'
  );
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(
    JSON.stringify({
      type: type,
      details: $('#details').val(),
      topic: topic
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
function showUserEditBox(_id) {
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    'GET',
    'https://smartcity.onrender.com/apply/applyAll/'
  );
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      const objects = JSON.parse(this.responseText);
      let user = {};
      objects.forEach((element) => {
        if (element._id === _id) {
          user = element;
          return false;
        }
      });
      let html =
        '<select class="swal2-input" name="type" id="type"  onchange="gettype()">';
      types.forEach((e, i) => {
        html += `<option value="${i}"${
          user['type'] === e ? 'selected' : ''
        }>${e}</option>`;
      });
      html += '</select>';
      Swal.fire({
        title: 'แก้ไข',
        html:
          '<input id="_id" type="hidden" value=' +
          _id +
          '>' +
          html +
          '<input id="details" class="swal2-input" placeholder="details" value="' +
          user['details'] +
          '">',
        focusConfirm: false,
        preConfirm: () => {
          if ($('#details').val() !== '') {
            userEdit();
          } else {
            Swal.fire({
              title: 'กรุณากรอกข้อมูล',
              timer: 3000
            });
          }
        }
      });
    }
  };
}

function userEdit() {
  const _id = document.getElementById('_id').value;
  const details = document.getElementById('details').value;
  const xhttp = new XMLHttpRequest();
  xhttp.open(
    'PUT',
    'https://smartcity.onrender.com/apply/editapply/' + _id
  );
  xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhttp.send(
    JSON.stringify({
      _id: _id,
      type: type,
      details: details,
      topic: topic
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

function userDelete(_id) {
  Swal.fire({
    title: 'คุณต้องการลบข้อมูลหรือไม่ ?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'ยืนยัน',
    denyButtonText: 'ยกเลิก'
  }).then((result) => {
    if (result.isConfirmed) {
      const xhttp = new XMLHttpRequest();
      xhttp.open(
        'DELETE',
        'https://smartcity.onrender.com/apply/deleteapply/' + _id
      );
      xhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
      xhttp.send();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          const objects = JSON.parse(this.responseText);
          Swal.fire('การลบข้อมูลสำเร็จ');
          loadTable();
        }
      };
    }
  });
}

/********************************Login*********************************** */
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
