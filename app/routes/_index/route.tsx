import { useEffect, useState } from "react";
import { apiClient } from "../../api/client";
import { MenuResponse, Menu, isMenuResponse } from "./types";

export default function Index() {
  const [menu, setMenu] = useState<Menu[] | null>(null);
  const getData = () => {
    apiClient
      .get<MenuResponse>("/users")
      .then((res: unknown) => {
        const response = res as MenuResponse;
        setMenu(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("hola", menu);

  return (
    <div>
      <h1>Index</h1>
      {menu?.map((menu) => (
        <div key={menu.id}>
          <h2>{menu.first_name}</h2>
        </div>
      ))}
    </div>
  );
}
