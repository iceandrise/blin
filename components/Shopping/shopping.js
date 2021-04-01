class Shopping{
    handleClear() {
        ROOT_SHOPPING.innerHTML = '';
    }

    render() {
        const itemsStore = localStorageUtil.getItems_();
        let htmlCatalog =' ';
        let sumCatalog = 0;

        CATALOG.forEach(({ id, name, price }) => {
            if (itemsStore.indexOf(id) !== -1) {
                htmlCatalog += `
                    <tr>
                        <td class="shopping-element__name"> ${name}</td>
                        <td class="shopping-element__price">${price.toLocaleString()} бел.руб</td>
                    </tr>
                `;
                sumCatalog += price;
            }
        });
       

        const html = `
            <div class="shopping-container">
            <div class="shopping__close" onclick="shoppingPage.handleClear();"></div>
                
                <table>
                    <td class="shopping-element__str"> Ваша корзина</td>
                    ${htmlCatalog}
                    <tr>                      
                        <td class="shopping-element__name"> Сумма:</td>
                       
                        <td class="shopping-element__price">${sumCatalog.toLocaleString()} бел.руб</td>
                        <td class="shopping-element__str2"> *для заказа необходима регистрация на сайте</td>
                    </tr>
                </table>
            </div>
        `;
        ROOT_SHOPPING.innerHTML = html;
    }
}

const shoppingPage = new Shopping();