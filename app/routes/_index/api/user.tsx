import { MenuResponse } from "../types";
import { apiClient } from "../../../api/client";

async function getUsers(handle?: string) {
  const response = await apiClient.get("/users");
  const res = response as MenuResponse;
  return res?.data?.data;
}

export default {
  getUsers,
};
