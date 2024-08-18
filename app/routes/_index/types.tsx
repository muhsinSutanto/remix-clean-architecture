export type Menu = {
  id: number;
  first_name: string;
};

export type UserDataResponse = {
  data: Menu[]; // Array of users
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
};

export type MenuResponse = {
  data: UserDataResponse;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: Record<string, any>;
  request: any;
};

export function isMenuResponse(res: unknown): res is MenuResponse {
  if (typeof res !== "object" || res === null) return false;

  const response = res as { data?: unknown };
  if (typeof response.data !== "object" || response.data === null) return false;

  const dataField = response.data as { data?: unknown };
  return Array.isArray(dataField.data);
}
