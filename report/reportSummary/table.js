let exportData = []

new gridjs.Grid({
  columns: [
    "ลำดับ",
    "วันที่",
    "ประเภท",
    "หัวข้อ",
    "รายละเอียด",
    "สถานะ",
  ],
  server: {
    url: "https://nr-api-smartcity-final.onrender.com/appeal/appealAll",
    then: (data) =>
      data.map((employee, i) => {
        let Strain = 0;
        for (let j = 1; j <= 20; j++) {
          Strain += Number(employee[`Strain${j}`]);
        }

        let happy = 0;
        for (let j = 1; j <= 15; j++) {
          happy += Number(employee[`happy${j}`]);
        }

        let memory = 0;
        for (let j = 1; j <= 14; j++) {
          memory += Number(employee[`memory${j}`]);
        }

        exportData.push({
          "ลำดับ": i + 1,
          "วันที่" : employee.created,
          "ประเภท" : employee.type,
          "หัวข้อ": employee.topic,
          "รายละเอียด" : employee.details,
          "สถานะ": employee.status,
        })
        return [
          i + 1,
          employee.created,
          employee.type,
          employee.topic,
          employee.details, 
          employee.status,
        ];
      }),
  },
  search: {
    enabled: true,
  },
  sort: true,
  pagination: {
    enabled: true,
    limit: 1000,
    summary: false,
  },
}).render(document.getElementById("table"));



function  onExport() {
  const now  = new Date()
  const dataWS = XLSX.utils.json_to_sheet(exportData)
  const wb = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(wb, dataWS)
  XLSX.writeFile(wb,(now.toLocaleDateString('th')+" - "+now.toLocaleTimeString('th'))+'.xlsx')
}


