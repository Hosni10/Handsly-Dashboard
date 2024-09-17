export interface Job {
    _id?: string; 
    title: string;
    description: string;
    budget: number;
    skills: string[];
    level: "entry" | "intermediate" | "expert";
    status: "pending" | "in-progress" | "completed" | "canceled";
    deletedAt?: Date; 
    createdAt?: Date;  
    updatedAt?: Date;  
}
