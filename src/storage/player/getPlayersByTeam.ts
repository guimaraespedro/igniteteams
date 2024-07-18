import { getPlayersByGroup } from "./getPlayersByGroup";
import { PlayerStorageDto } from "./PlayerStorageDto";

export async function getPlayersByTeam(
  team: string,
  group: string
): Promise<PlayerStorageDto[]> {
  try {
    const storage = await getPlayersByGroup(group);
    const players = storage.filter((p) => p.team === team);

    return players;
  } catch (err) {
    throw err;
  }
}
