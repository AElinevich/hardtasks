let countriesSelect = document.querySelector('#country');
let citiesSelect = document.querySelector('#city');
let result = document.querySelector('.result');
let options = document.querySelectorAll('option');

console.log(options);
const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}

  countriesSelect.addEventListener('change', function(){
    
    let cities = cityArr[this.value];
    city.style.display = "inline-block";
    citiesSelect.length = 0;
    citiesSelect.setAttribute('selected', 'true')
    for (let i = 0; i < cities.length; i++){
      let list = document.createElement('option')
      citiesSelect.append(list);
      list.textContent = cities[i];
      
      citiesSelect.addEventListener('change', () => {
        options.forEach(function(item){
          if(item.selected) {let text = item.textContent;
            result.innerHTML = `<div>${text}:  ${citiesSelect.value}</div>`;
          }
         

        })
        
      })
      
      
    }
  })