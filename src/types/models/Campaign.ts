// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type CampaignProps = Omit<Campaign, NonNullable<FunctionPropertyNames<Campaign>>>;

export class Campaign implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public campaigner?: string;

    public ambusher?: string;

    public isClaimedCampaigner: boolean;

    public isClaimedAmbusher: boolean;

    public rewardHonCampaigner: bigint;

    public rewardHrmCampaigner: bigint;

    public rewardHonAmbusher: bigint;

    public rewardHrmAmbusher: bigint;

    public tier: bigint;

    public area: bigint;

    public totalAttack: bigint;

    public totalDefense: bigint;

    public startTimestamp: bigint;

    public reinforceTimestamps: bigint[];


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Campaign entity without an ID");
        await store.set('Campaign', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Campaign entity without an ID");
        await store.remove('Campaign', id.toString());
    }

    static async get(id:string): Promise<Campaign | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Campaign entity without an ID");
        const record = await store.get('Campaign', id.toString());
        if (record){
            return Campaign.create(record as CampaignProps);
        }else{
            return;
        }
    }



    static create(record: CampaignProps): Campaign {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Campaign(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
