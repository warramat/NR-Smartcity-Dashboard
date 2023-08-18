var jwt = localStorage.getItem("jwt");
if (jwt == null) {
  window.location.href = "../../login.html";
}

function loadUser() {
  var base64Url = jwt.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  const obj = JSON.parse(jsonPayload);
  if (document.getElementById("userid")) {
    document.getElementById("userid").innerText = obj.userid;
  }
  if (document.getElementById("name")) {
    document.getElementById("name").innerText = obj.name;
  }
}

loadUser();

function logout() {
  localStorage.removeItem("jwt");
  window.location.href = "../../login.html";
}

/*************************************************** */

function loadFile(event) {
  let reader = new FileReader();
  reader.onload = function () {
    addImage(reader.result);
  };
  reader.readAsDataURL(event.target.files[0]);
}

function addImage(img) {
  const id = Math.round(Math.random() * 10000);
  $("#list_images").append(`
    <li class="item" id="${id}">
      <img class="img-row" src="${img}">
      <button class="btn btn-danger" onclick="remove_img(${id})">x</button>
    </li>
    `);
  $("#upload").val("");
  $("#camera").val("");
}

function remove_img(id) {
  $("#" + id).remove();
}

function submitAppeal() {
  Swal.fire({
    icon: "question",
    title: "ยืนยันการรับงาน ?",
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: "ยืนยัน",
    denyButtonText: "ยกเลิก",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const adminData = readJWT();
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      const urlParams = new URLSearchParams(window.location.search);
      const _id = urlParams.get("_id");
      let img = [];
      $(".img-row").each(function (i, obj) {
        img.push($(this).attr("src"));
      });
      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify({
          add_img: img,
          detail_edit: $("#comment").val(),
        }),
        redirect: "follow",
      };
      try {
        await fetch(
          "https://smartcity.onrender.com/appeal/submitappeal/" +
            _id,
          requestOptions
        );
        requestOptions.method = "PUT";
        requestOptions.body = JSON.stringify({
          id: adminData.id,
        });
        await fetch(
          "https://smartcity.onrender.com/appeal/editappeal/" +
            _id,
          requestOptions
        );
        Swal.fire("บันทึกข้อมูลสำเร็จ!", "", "success").then(() => {
          window.location = "./appeal.html";
        });
      } catch (e) {
        Swal.fire("เกิดข้อผิดพลาด", String(e), "error").then(() => {
          location.reload();
        });
      }
    }
  });
}
