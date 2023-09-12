import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "../../utils/AppError";
import { GROUP_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupsGetAll";

export async function groupCreate(newGroup: string) {
  try {

    const storageGroups = await groupGetAll()

    const groupAlreadyExists = storageGroups.includes(newGroup)

    if(groupAlreadyExists){
      throw new AppError('Nome do Grupo já existe')
    }

    const storage = JSON.stringify([...storageGroups, newGroup])
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)

  } catch(error) {
    throw error;
  }
}