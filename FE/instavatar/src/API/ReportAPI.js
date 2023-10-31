import { api } from "./API";

export const createReportAPI = (report) => {
  return api("POST", "reports/", report);
};
