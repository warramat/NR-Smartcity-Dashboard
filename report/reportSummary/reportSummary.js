
fetch('https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=electric')
.then(response => response.json())
.then(data => console.log(data.total , "data>>>"))
