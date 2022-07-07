// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type HeroCampaignProps = Omit<HeroCampaign, NonNullable<FunctionPropertyNames<HeroCampaign>>>;

export class HeroCampaign implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public campaignId: string;

    public heroId: string;

    public isAmbusher: boolean;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save HeroCampaign entity without an ID");
        await store.set('HeroCampaign', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove HeroCampaign entity without an ID");
        await store.remove('HeroCampaign', id.toString());
    }

    static async get(id:string): Promise<HeroCampaign | undefined>{
        assert((id !== null && id !== undefined), "Cannot get HeroCampaign entity without an ID");
        const record = await store.get('HeroCampaign', id.toString());
        if (record){
            return HeroCampaign.create(record as HeroCampaignProps);
        }else{
            return;
        }
    }


    static async getByCampaignId(campaignId: string): Promise<HeroCampaign[] | undefined>{
      
      const records = await store.getByField('HeroCampaign', 'campaignId', campaignId);
      return records.map(record => HeroCampaign.create(record as HeroCampaignProps));
      
    }

    static async getByHeroId(heroId: string): Promise<HeroCampaign[] | undefined>{
      
      const records = await store.getByField('HeroCampaign', 'heroId', heroId);
      return records.map(record => HeroCampaign.create(record as HeroCampaignProps));
      
    }


    static create(record: HeroCampaignProps): HeroCampaign {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new HeroCampaign(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
