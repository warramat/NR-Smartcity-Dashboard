async function loadTable() {
  try {
    let response = await fetch("https://nr-api-smartcity-final.onrender.com/User-admin/adminAll")
    if (response.ok) {
      var trHTML = '';
      const objects = await response.json()
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['name'] + '</td>';
        trHTML += '<td>' + object['userid'] + '</td>';
        trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick=\'showUserEditBox("' + object['_id'] + '")\'>Edit</button>';
        trHTML += '<button type="button" class="btn btn-outline-danger" onclick=\'userDelete("' + object['_id'] + '")\'>Del</button></td>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  } catch (e) { }
}

loadTable();

/************************************* CREATE*************************************************** */


function showUserCreateBox() {
  Swal.fire({
    title: 'Create user',
    html:
      '<input id="_id" type="hidden">' +
      '<input id="f-name" class="swal2-input" placeholder="Name">' +
      '<input id="f-userid" class="swal2-input" placeholder="Userid">' +
      '<input id="password" class="swal2-input" placeholder="Password">',
    focusConfirm: false,
    preConfirm: () => {
      const name = document.getElementById("f-name").value;
      const userid = document.getElementById("f-userid").value;
      const password = document.getElementById("password").value;
      userCreate(name, userid, password);
    }
  })
}

async function userCreate(name, userid, password) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    await fetch("https://nr-api-smartcity-final.onrender.com/User-admin/Cre-Admin", {
      method: "POST",
      headers: myHeaders,
      body: JSON.stringify({ name, password, userid })
    })
    await Swal.fire({ text: "บันทึกข้อมูลเสร็จสิ้น" })
    loadTable()
  } catch (error) { }
}

/***************************************** UPDATE ******************************************************** */
async function showUserEditBox(_id) {
  try {
    const response = await fetch('https://nr-smartcity.onrender.com/User-admin/user/' + _id)
    if (response.ok) {
      const user = await response.json()
      Swal.fire({
        title: 'แก้ไขข้อมูลผู้ใช้',
        html:
          '<input id="userid1" disable value=' + user['userid'] + '>' +
          '<input id="name1" class="swal2-input"  value="' + user['name'] + '">' +
          '<input id="password1" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          const name = document.getElementById("f-name").value;
          const userid = document.getElementById("f-userid").value;
          const password = document.getElementById("password").value;
          userEdit(name, userid, password);
        }
      })
    }
  } catch (error) {

  }
}



async function userEdit(name, userid, password) {
  try {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    await fetch("https://nr-smartcity.onrender.com/User-admin/user/" + userid, {
      method: "PUT",
      headers: myHeaders,
      body: JSON.stringify(password.length > 0 ? { name, password } : { name })
    })
    await Swal.fire({ text: "บันทึกข้อมูลเสร็จสิ้น" })
    loadTable()
  } catch (error) { }
}


/***************************************** DELETE *********************************************** */
async function userDelete(_id) {
  try {
    const { isConfirmed } = await Swal.fire({
      title: 'ต้องการลบข้อมูลหรือไม่ ?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'ยืนยัน',
      denyButtonText: `ยกเลิก`,
    })
    if (isConfirmed) {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json")
      await fetch("https://nr-smartcity.onrender.com/User-admin/deluser/" + _id, {
        method: "DELETE",
        headers: myHeaders
      })
      await Swal.fire({ text: "ลบข้อมูลเสร็จสิ้น" })
      loadTable()
    }
  } catch (error) { }
}


/******************************************************SEARCH******************************************** */
async function loadTable(keyword) {
  try {
    let response = await fetch("https://nr-api-smartcity-final.onrender.com/User-admin/adminAll/search?keyword="+keyword)
    if (response.ok) {
      var trHTML = '';
      const objects = await response.json()
      for (let object of objects) {
        trHTML += '<tr>';
        trHTML += '<td>' + object['name'] + '</td>';
        trHTML += '<td>' + object['userid'] + '</td>';
        trHTML += '<td><button type="button" class="btn btn-outline-secondary" onclick=\'showUserEditBox("' + object['_id'] + '")\'>Edit</button>';
        trHTML += '<button type="button" class="btn btn-outline-danger" onclick=\'userDelete("' + object['_id'] + '")\'>Del</button></td>';
        trHTML += "</tr>";
      }
      document.getElementById("mytable").innerHTML = trHTML;
    }
  } catch (e) { }
}