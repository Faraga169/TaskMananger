export type Status = "Done" | "Not Done";

export interface ITaskBase {
  id?: string;
  Title: string;
  Description: string;
  Priority: string;
  DueDate: string;
  Category: string;
  Status: Status;
  UserName:string|null;
}
