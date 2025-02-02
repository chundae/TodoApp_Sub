import { RouteProp } from "@react-navigation/native";

export type PageParam = {
    Home: undefined;
    CreateEdit: { mode: "new" | "edit"; id?: string };
};