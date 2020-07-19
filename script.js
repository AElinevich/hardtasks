const russianWords = document.querySelector('.russian');
const englishWords = document.querySelector('.english');
const buttonRu = document.querySelector('.translateEng');
const buttonEng = document.querySelector('.translateRu');

    let translateObj = {
        key : 'trnsl.1.1.20190225T091515Z.06bde7bd52a8c1a7.0749f827a8a0474bf52a18b3b47f827f339c781a',
        api: 'https://translate.yandex.net/api/v1.5/tr.json/translate',


        translate: function (text, callback) {
            let url = this.api + '?';
            url += 'key='+this.key;
            url += '&text='+text;
            url += '&lang=ru-en';

            let ajax = new XMLHttpRequest();
            ajax.open('GET', url, true);
            ajax.onreadystatechange = function() {
                if(ajax.readyState == 4) {
                    if (ajax.status == 200) {
                    text = ajax.responseText;
                    text = JSON.parse(text);
                    text = text.text[0];
                        callback(text);
                    }
                }
            };
            ajax.send(null);
        },
  
    }
    
 
    buttonRu.addEventListener('click', ()=> {
        translateObj['wordRu'] = russianWords.value;
    englishWords.innerText = translateObj.translate(russianWords.value, (text) => {
        englishWords.value = text;
   
    })
  
    })

    
    buttonEng.addEventListener('click', () => {
        translateObj['wordEng'] = englishWords.value;
        englishWords.innerText = translateObj.translate(englishWords.value, (text)=>{
            russianWords.value = text;
            englishWords.value = translateObj['wordRu'];
    })
    })