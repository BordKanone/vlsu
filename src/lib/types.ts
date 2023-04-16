export type Task = {
  title: string;
  description: string;
  code: string;
  status: "progress" | "waiting" | "completed";
};
