class LocalStorageUtil {
    constructor() {
        this.keyName = 'items';
    }

    getItems_() {
        const itemsLocalStorage = localStorage.getItem(this.keyName);
        if (itemsLocalStorage !== null) {
            return JSON.parse(itemsLocalStorage);
        }
        return [];
    }

    putItems(id) {
        let items = this.getItems_();
        let pushItems = false;
        const index = items.indexOf(id);

        if (index === -1) {
            items.push(id);
            pushItems = true;
        } else {
            items.splice(index, 1);
        }

        localStorage.setItem(this.keyName, JSON.stringify(items));

        return { pushItems, items }
    }
}

const localStorageUtil = new LocalStorageUtil();