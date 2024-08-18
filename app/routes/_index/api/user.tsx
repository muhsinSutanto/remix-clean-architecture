import { MenuResponse } from "../types";
import { apiClient } from "~/api/client";

export async function getUsers(handle: string) {
  const response = await apiClient.get<MenuResponse>("/users");
  return response.data.data;
}
