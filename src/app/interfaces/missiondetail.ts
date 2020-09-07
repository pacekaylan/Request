import {Agent} from '../interfaces/agent';
export interface MissionDetail 
{
    id: number;
    name: string;
    startDate: Date;
    completed: boolean;
    notes: string;
    createdDate: Date;
    description: string;
    completedDate: Date;
    agents: Agent [];
}
