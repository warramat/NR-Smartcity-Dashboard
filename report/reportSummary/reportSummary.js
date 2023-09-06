/***************************ใบงานร้องเรียน ทั้งหมด********************************************************** */
async function  dataAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=")).json()
    document.getElementById('dataAll').innerHTML = total
  }
  async function electricAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=electric")).json()
    document.getElementById('electricAll').innerHTML = total
  }
  async function roadAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=road")).json()
    document.getElementById('roadAll').innerHTML = total
  }
  async function plumbingAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=plumbing")).json()
    document.getElementById('plumbingAll').innerHTML = total
  }
  async function treeAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=tree")).json()
    document.getElementById('treeAll').innerHTML = total
  }
  async function drainAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=drainageditch")).json()
    document.getElementById('drainAll').innerHTML = total
  }
  async function annoyingAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=annoying")).json()
    document.getElementById('annoyingAll').innerHTML = total
  }
  async function garbageAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=garbage")).json()
    document.getElementById('garbageAll').innerHTML = total
  }
  async function plumbingAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=plumbing")).json()
    document.getElementById('plumbingAll').innerHTML = total
  }
  async function pensionAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=pension")).json()
    document.getElementById('pensionAll').innerHTML = total
  }
  async function fundAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=fund")).json()
    document.getElementById('fundAll').innerHTML = total
  }
  async function educationAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=education")).json()
    document.getElementById('educationAll').innerHTML = total
  }
  async function otherAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=other")).json()
    document.getElementById('otherAll').innerHTML = total
  }
  async function emergencyAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=emergency")).json()
    document.getElementById('emergencyAll').innerHTML = total
  }
  async function appointmentAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=appointment")).json()
    document.getElementById('appointmentAll').innerHTML = total
  }
  async function paresthesiaAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=paresthesia")).json()
    document.getElementById('paresthesiaAll').innerHTML = total
  }
  async function HydrotherapyAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=Hydrotherapy")).json()
    document.getElementById('HydrotherapyAll').innerHTML = total
  }
  async function fireAll(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=&topic=fire")).json()
    document.getElementById('fireAll').innerHTML = total
  }
  
  /*********************ใบงาน กำลังรอดำเนินการ****************************************************** */

  async function  dataTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=")).json()
    document.getElementById('dataTest').innerHTML = total
  }
  async function electricTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=electric")).json()
    document.getElementById('electricTest').innerHTML = total
  }
  async function roadTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=road")).json()
    document.getElementById('roadTest').innerHTML = total
  }
  async function plumbingTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=plumbing")).json()
    document.getElementById('plumbingTest').innerHTML = total
  }
  async function treeTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=tree")).json()
    document.getElementById('treeTest').innerHTML = total
  }
  async function drainTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=drainageditch")).json()
    document.getElementById('drainTest').innerHTML = total
  }
  async function annoyingTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=annoying")).json()
    document.getElementById('annoyingTest').innerHTML = total
  }
  async function garbageTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=garbage")).json()
    document.getElementById('garbageTest').innerHTML = total
  }
  async function plumbingTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=plumbing")).json()
    document.getElementById('plumbingTest').innerHTML = total
  }
  async function pensionTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=pension")).json()
    document.getElementById('pensionTest').innerHTML = total
  }
  async function fundTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=fund")).json()
    document.getElementById('fundTest').innerHTML = total
  }
  async function educationTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=education")).json()
    document.getElementById('educationTest').innerHTML = total
  }
  async function otherTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=other")).json()
    document.getElementById('otherTest').innerHTML = total
  }
  async function emergencyTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=emergency")).json()
    document.getElementById('emergencyTest').innerHTML = total
  }
  async function appointmentTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=appointment")).json()
    document.getElementById('appointmentTest').innerHTML = total
  }
  async function paresthesiaTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=paresthesia")).json()
    document.getElementById('paresthesiaTest').innerHTML = total
  }
  async function HydrotherapyTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=Hydrotherapy")).json()
    document.getElementById('HydrotherapyTest').innerHTML = total
  }
  async function fireTest(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=รอตรวจสอบ&topic=fire")).json()
    document.getElementById('fireTest').innerHTML = total
  }


   /*********************ใบงาน ตรวจสอบ****************************************************** */

   async function  dataEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=")).json()
    document.getElementById('dataEdit').innerHTML = total
  }
  async function electricEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=electric")).json()
    document.getElementById('electricEdit').innerHTML = total
  }
  async function roadEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=road")).json()
    document.getElementById('roadEdit').innerHTML = total
  }
  async function plumbingEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=plumbing")).json()
    document.getElementById('plumbingEdit').innerHTML = total
  }
  async function treeEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=tree")).json()
    document.getElementById('treeEdit').innerHTML = total
  }
  async function drainEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=drainageditch")).json()
    document.getElementById('drainEdit').innerHTML = total
  }
  async function annoyingEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=annoying")).json()
    document.getElementById('annoyingEdit').innerHTML = total
  }
  async function garbageEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=garbage")).json()
    document.getElementById('garbageEdit').innerHTML = total
  }
  async function plumbingEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=plumbing")).json()
    document.getElementById('plumbingEdit').innerHTML = total
  }
  async function pensionEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=pension")).json()
    document.getElementById('pensionEdit').innerHTML = total
  }
  async function fundEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=fund")).json()
    document.getElementById('fundEdit').innerHTML = total
  }
  async function educationEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=education")).json()
    document.getElementById('educationEdit').innerHTML = total
  }
  async function otherEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=other")).json()
    document.getElementById('otherEdit').innerHTML = total
  }
  async function emergencyEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=emergency")).json()
    document.getElementById('emergencyEdit').innerHTML = total
  }
  async function appointmentEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=appointment")).json()
    document.getElementById('appointmentEdit').innerHTML = total
  }
  async function paresthesiaEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=paresthesia")).json()
    document.getElementById('paresthesiaEdit').innerHTML = total
  }
  async function HydrotherapyEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=Hydrotherapy")).json()
    document.getElementById('HydrotherapyEdit').innerHTML = total
  }
  async function fireEdit(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=กำลังดำเนินการ&topic=fire")).json()
    document.getElementById('fireEdit').innerHTML = total
  }


   /*********************ใบงาน เสร็จสิ้น****************************************************** */

   async function  dataFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=")).json()
    document.getElementById('dataFinish').innerHTML = total
  }
  async function electricFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=electric")).json()
    document.getElementById('electricFinish').innerHTML = total
  }
  async function roadFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=road")).json()
    document.getElementById('roadFinish').innerHTML = total
  }
  async function plumbingFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=plumbing")).json()
    document.getElementById('plumbingFinish').innerHTML = total
  }
  async function treeFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=tree")).json()
    document.getElementById('treeFinish').innerHTML = total
  }
  async function drainFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=drainageditch")).json()
    document.getElementById('drainFinish').innerHTML = total
  }
  async function annoyingFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=annoying")).json()
    document.getElementById('annoyingFinish').innerHTML = total
  }
  async function garbageFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=garbage")).json()
    document.getElementById('garbageFinish').innerHTML = total
  }
  async function plumbingFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=plumbing")).json()
    document.getElementById('plumbingFinish').innerHTML = total
  }
  async function pensionFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=pension")).json()
    document.getElementById('pensionFinish').innerHTML = total
  }
  async function fundFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=fund")).json()
    document.getElementById('fundFinish').innerHTML = total
  }
  async function educationFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=education")).json()
    document.getElementById('educationFinish').innerHTML = total
  }
  async function otherFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=other")).json()
    document.getElementById('otherFinish').innerHTML = total
  }
  async function emergencyFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=emergency")).json()
    document.getElementById('emergencyFinish').innerHTML = total
  }
  async function appointmentFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=appointment")).json()
    document.getElementById('appointmentFinish').innerHTML = total
  }
  async function paresthesiaFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=paresthesia")).json()
    document.getElementById('paresthesiaFinish').innerHTML = total
  }
  async function HydrotherapyFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=Hydrotherapy")).json()
    document.getElementById('HydrotherapyFinish').innerHTML = total
  }
  async function fireFinish(){
    let {total} = await (await fetch("https://nr-api-smartcity-final.onrender.com/appeal/find/status?status=เสร็จสิ้น&topic=fire")).json()
    document.getElementById('fireFinish').innerHTML = total
  }
   
   window.onload = async () => {
    dataAll()
    electricAll()
    roadAll()
    plumbingAll()
    treeAll()
    drainAll()
    annoyingAll()
    garbageAll()
    plumbingAll()
    pensionAll()
    fundAll()
    educationAll()
    otherAll()
    emergencyAll()
    appointmentAll()
    paresthesiaAll()
   
    HydrotherapyAll()
    fireAll()


    dataTest()
    electricTest()
    roadTest()
    plumbingTest()
    treeTest()
    drainTest()
    annoyingTest()
    garbageTest()
    plumbingTest()
    pensionTest()
    fundTest()
    educationTest()
    otherTest()
    emergencyTest()
    appointmentTest()
    paresthesiaTest()
    HydrotherapyTest()
    fireTest()


    dataEdit()
    electricEdit()
    roadEdit()
    plumbingEdit()
    treeEdit()
    drainEdit()
    annoyingEdit()
    garbageEdit()
    plumbingEdit()
    pensionEdit()
    fundEdit()
    educationEdit()
    otherEdit()
    emergencyEdit()
    appointmentEdit()
    paresthesiaEdit()
    HydrotherapyEdit()
    fireEdit()


    
    dataFinish()
    electricFinish()
    roadFinish()
    plumbingFinish()
    treeFinish()
    drainFinish()
    annoyingFinish()
    garbageFinish()
    plumbingFinish()
    pensionFinish()
    fundFinish()
    educationFinish()
    otherFinish()
    emergencyFinish()
    appointmentFinish()
    paresthesiaFinish()
    HydrotherapyFinish()
    fireFinish()
  } 
  
  