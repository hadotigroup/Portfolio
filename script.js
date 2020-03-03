var porto = [{
                timeline : '1-2',
                organisation : "sdfsfsdfkjskfjsdfkjs",
                description : 'sdfhfjsfjksfdkdskfslkfksl',
                technology : ['sdfs', 'sdfsd', 'sdfsss']
            },{
                timeline : '2-3',
                organisation : "sdfsfsdfkjskfjsdfkjs",
                description : 'sdfhfjsfjksfdkdskfslkfksl',
                technology : ['sdfs', 'sdfsd', 'sdfsss']
            },{
                timeline : '3-4',
                organisation : "sdfsfsdfkjskfjsdfkjs",
                description : 'sdfhfjsfjksfdkdskfslkfksl',
                technology : ['sdfs', 'sdfsd', 'sdfsss']
            },{
                timeline : '4-5',
                organisation : "sdfsfsdfkjskfjsdfkjs",
                description : 'sdfhfjsfjksfdkdskfslkfksl',
                technology : ['sdfs', 'sdfsd', 'sdfsss']
            }];

if(typeof(Storage) !== undefined){
    localStorage.setItem('porto', JSON.stringify(porto));
}

 var porto = JSON.parse(localStorage.getItem('porto'));
 let portoHtml = '';
 porto.forEach((item) =>{
     let technology = '';
     item.technology.forEach(tech =>{
         if(tech !== undefined){
             technology += '<span>'+tech+'</span>';
         }
     });
     console.log(technology);
     portoHtml += '<div class="box">\
                        <h3>'+item.organisation+'</h3>\
                        <p>'+item.description+'</p>\
                        <div class="technology">\
                            '+technology+'\
                        </div>\
                    </div>';
     document.querySelector('#porto').innerHTML = portoHtml;
 });