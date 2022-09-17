///capitalize('my mom is weird) My Mom Is Weirs

function captitalize(str){
  const strArray = str.split(' ');
  
  return strArray.map(element => element.charAt(0).toUpperCase() + element.slice(1, element.length).toLowerCase()).join(' ')
}

captitalize('my mom is weird');