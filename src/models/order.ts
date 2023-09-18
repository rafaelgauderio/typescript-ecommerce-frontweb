export class OrderItemDTO {
    constructor(
        public productId: number,
        public quantity: number,
        public price: number,
        public name: string,
        public imgUrl: string
    ) { }
    get subTotalItem(): number {
        return (this.quantity * this.price);
    }
}

export class OrderDTO {
    id?: number;
    items: OrderItemDTO[] = [];

    get totalKart(): number {
        let sum = 0;
        this.items.map((item) => {
            sum += item.subTotalItem;
        })
        return sum;
    }
}

