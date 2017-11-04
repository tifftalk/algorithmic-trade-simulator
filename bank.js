class Bank {
    constructor(assetCount, cashCents){
        this.assetCount = assetCount;
        this.cashCents = cashCents;        
    }

    buy(count, priceCents){
        let transactionCents = priceCents * count;
        
        this.cashCents -= transactionCents;
        this.assetCount += count;    
    }
    sell(count, priceCents){
        let transactionCents = priceCents * count;
        
        this.cashCents += transactionCents;
        this.assetCount -= count;   
    }

    toString(){
        return
        `
        Cash:  $${ this.cashCents / 100 } 
        Assets Units: ${ this.assetUnits }
        `
    }
}
module.exports.Bank = Bank;