export type Status = "Done" | "Not Done";

export interface ITask {
  Id: string;
  Title: string;
  Description: string;
  Priority: string;
  DueDate: string;
  Category: string;
  Status: Status;
}
