import { ITargetEntry, SolarPanelEntries } from '@/types/types';

class SolarPanelsEntriesServiceApi {
  getAllEntries(): Promise<{ results: SolarPanelEntries }> {
    return fetch(
      'https://api3.geo.admin.ch/rest/services/api/MapServer/identify?geometryType=esriGeometryPoint&geometry=600989,197423.7&tolerance=400&imageDisplay=608,360,96&mapExtent=600913,197378.7,601065,197468.7'
    ).then((response) => response.json());
  }

  getEntryById(id: string): Promise<{ feature: ITargetEntry }> {
    return fetch(
      `https://api3.geo.admin.ch/rest/services/all/MapServer/ch.bfe.solarenergie-eignung-daecher/${id}?geometryFormat=esriGeojson`
    ).then((response) => response.json());
  }
}

const solarPanelsEntriesServiceApi = new SolarPanelsEntriesServiceApi();

export default solarPanelsEntriesServiceApi;
