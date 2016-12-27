import { Collectable } from "./collectable.model";

export class CollectableService {
    private collectables : Collectable[] = [
        {description:'item 1 desc',type:'Photos'},
        {description:'item 2 desc',type:'Books'},
        {description:'item 3 desc',type:'Cars'},
        {description:'item 4 desc',type:'Books'},
    ]; 
    
getCollectables() {
    return this.collectables;
}

}