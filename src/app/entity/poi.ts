enum POI_TYPE {
  RESTAURANT,
  LIBRARY,
  BAR,
  TRAIN_STATION,
  METRO_STATION
}

export class Poi {
  id: number;
  name: string;
  type: POI_TYPE;
  keywords: string[];
  geojson;
}
