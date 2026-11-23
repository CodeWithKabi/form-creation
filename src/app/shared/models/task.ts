export interface Task{
id:number;
title:string;
description:string;
dueDate:string;
priority:string;
completed:boolean;
  completedAt: string | null;
}