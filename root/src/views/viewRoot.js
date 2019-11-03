export class ViewRoot {
    constructor() {
        this.selectedValue = "";
    }
    
    render(news, action) {
        if(news && news.length > 0 && action) {
            news.forEach(action);
        }
    }
}