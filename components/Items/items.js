
class Items {
    
    constructor() {
        this.classNameActive = 'items-element__btn_active';
        this.labelAdd = 'В корзину';
        this.labelRemove = 'Удалить из корзины';
    }
    

    handleSetLocationStorage(element, id) {
        const { pushItems, items } = localStorageUtil.putItems(id);
        
        if (pushItems) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
    }
     render() {
        const itemsStore = localStorageUtil.getItems_();
        let htmlCatalog =' ';
    

        CATALOG.forEach(({id, name, img, price,weight_str, weight,mateial,type}) => {
            let activeClass = '';
            let activeText = '';

            if (itemsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' '+this.classNameActive;
                activeText = this.labelRemove;
            }
            
            htmlCatalog += `
            
                <li class="items-element">
                
                   <span class="items-element__name">${name}</span>
                   
                   <img class="items-element__img" src="${img}" />
                   <span class="cena">    скидка -30%  до 1 мая 2021</span>
                   
                   <span class="items-element__price">
                   ${price.toLocaleString()} бел.руб</span>

                   
                   <span class="items-element__weight">
                   Вес:
                   ${weight.toLocaleString()}
                   гр

                   
                   </span>
                   
                   <span class="items-element__material">
                            
                         Материал: 
                   ${mateial}</span>

                   <span class="items-element__type">
                   Тип украшения:
                   ${type}</span>
                  

                   <button class="items-element__btn${activeClass}" onclick="itemPage.handleSetLocationStorage(this, '${id}');">
                        ${activeText}
                    </button>
                
                </li>
     
            `;

        });
        const html = `
            <ul class="items-container">
                ${htmlCatalog}
            </ul>
        `;
        
        ROOT_ITEMS.innerHTML = html;

    }
    
}
const itemPage = new Items();
itemPage.render();
