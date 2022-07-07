// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type HeroProps = Omit<Hero, NonNullable<FunctionPropertyNames<Hero>>>;

export class Hero implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public level: bigint;

    public attack: bigint;

    public defense: bigint;

    public endurance: bigint;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Hero entity without an ID");
        await store.set('Hero', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Hero entity without an ID");
        await store.remove('Hero', id.toString());
    }

    static async get(id:string): Promise<Hero | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Hero entity without an ID");
        const record = await store.get('Hero', id.toString());
        if (record){
            return Hero.create(record as HeroProps);
        }else{
            return;
        }
    }



    static create(record: HeroProps): Hero {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Hero(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
