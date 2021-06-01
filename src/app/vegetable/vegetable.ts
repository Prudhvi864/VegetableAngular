export class Vegetable {
    feedbackId: number;
    customerId:number;
    vegetableId: number;
    rating:number;
    comments:string;
    constructor(feedbackId:number,customerId:number,vegetableId:number,rating:number,comments:string){
        this.feedbackId = feedbackId;
        this.customerId= customerId;
        this.vegetableId = vegetableId;
        this.rating=rating;
        this.comments=comments;
    }
    toString():string{
        return "feedback id: "+this.feedbackId+", customer id: "+this.customerId+", vegetable id:"+this.vegetableId+", rating:"+this.rating+", comments:"+this.comments;
    }
}

