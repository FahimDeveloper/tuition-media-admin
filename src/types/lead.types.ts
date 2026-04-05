import type { TAdmin } from "./admin.types";

export type TLead = {
  name: string;
  contact: string;
  details: string;
  assignedTo: TAdmin;
  referredBy?: TAdmin;
  status: string;
  convertedBy?: TAdmin;
  followUps: {
    date: Date;
    note?: string;
    doneBy: TAdmin;
  }[];
};
