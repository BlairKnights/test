interface OS {  
    name: String;  
    language: String;  
}  

let OperatingSystem = (obj: OS): void => {  
  console.log('\nAndroid ' + obj.name + ' has ' + obj.language + ' language.\n');  
};  

let Oreo = {name: 'O', language: 'Java'}  
OperatingSystem({name: 'O', language: 'Java'}); 
