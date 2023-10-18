import { Crendentials } from "../interface/crendentials";


export class ResenhasModel implements Crendentials{
    _id;
    status;
    name: string;
    email: string;
    rating: number;
    comments: string;
    img: string;

    public constructor(name: string, email: string, rating: number, comments: string){
        this.status = "activo";
        this._id = Math.floor(Math.random()*100000);
        this.name = name;
        this.email = email;
        this.rating = rating;
        this.comments = comments
        this.img = "https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
    }
    
}


