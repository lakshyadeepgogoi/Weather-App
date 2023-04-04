console.log("hello");

let API_KEY = "8259f14207db856bbba42fc6a2026519";



function renderWhetherInfo(data){
        let newPara= document.createElement('p');
        newPara.textContent=  `${data?.main?.temp.toFixed(2)} °C`;
    
        document.body.appendChild(newPara);
}

async function fetchWhetherDetails(){
    
    try{
        let city = "Assam";

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    
        const data = await response.json();
        console.log("wether data=> " , data);    

        renderWhetherInfo(data);

    }
    catch(err){
        //hanfle the error here

    }


}

async function getCustomWhetherDetails(){
    try{
        let lat = 17.6333;
        let lon = 18.3333;
    
    
        let result = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        let data= await result.json();
        console.log(data);
    }
    catch(err){
        console.log("ERROR NOT FOUND", err);
    } 

}





function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
}


function getLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        console.log("No geoLocation Support");
    }
}

function showPosition(position) {
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
}